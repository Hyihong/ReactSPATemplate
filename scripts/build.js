'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
//如果在事件循环的一次轮询中，一个Promise被rejected，并且此Promise没有绑定错误处理器，'unhandledRejection事件会被触发。 
// 当使用Promises进行编程时，异常会以"rejected promises"的形式封装。
//Rejections可以被promise.catch()捕获并处理，并且在Promise chain 中传播。
//'unhandledRejection事件在探测和跟踪promises被rejected，并且rejections未被处理的场景中是很有用的。
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra');
const webpack = require('webpack');
const config = require('../config/webpack.config.prod');
const paths = require('../config/paths');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const printHostingInstructions = require('react-dev-utils/printHostingInstructions');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');

const measureFileSizesBeforeBuild = FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;
//const useYarn = fs.existsSync(paths.yarnLockFile); old
const useYarn = false;

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024; //0.5M 
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024; //1M

// Warn and crash if required files are missing

if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

// First, read the current file sizes in build directory.
// This lets us display how much they changed later.
measureFileSizesBeforeBuild(paths.appBuild)
  .then(previousFileSizes => {
    
    fs.emptyDirSync(paths.appBuild);//删除文件夹下的文件，但是保存目录 
    copyPublicFolder();// 复制public文件夹到输出文件中

    return build(previousFileSizes); // 开始用webpack进行编译打包
  })
  .then(
    ({ stats, previousFileSizes, warnings }) => {
      if (warnings.length) {
        console.log(chalk.yellow('Compiled with warnings.\n'));
        console.log(warnings.join('\n\n'));
        console.log(  '\nSearch for the ' + chalk.underline(chalk.yellow('keywords')) + ' to learn more about each warning.');
        console.log( 'To ignore, add ' + chalk.cyan('// eslint-disable-next-line') + ' to the line before.\n' );
      } else {
        console.log(chalk.green('编译成功!\n'));
        

      }

      console.log( chalk.magenta('gzip后文件大小:') );
      printFileSizesAfterBuild(
        stats,
        previousFileSizes,
        paths.appBuild,
        WARN_AFTER_BUNDLE_GZIP_SIZE,
        WARN_AFTER_CHUNK_GZIP_SIZE
      );
      console.log();

      //打印主机指令
      const appPackage = require(paths.appPackageJson);
      const publicUrl = paths.publicUrl;
      const publicPath = config.output.publicPath;
      const buildFolder = path.relative(process.cwd(), paths.appBuild);

      printHostingInstructions(
        appPackage,
        publicUrl,
        publicPath,
        buildFolder,
        useYarn
      );
       //console.log(chalk.green('复制build整个目录到F：//leelenToShow,用于在github上部署!\n'));
       //fs.copySync('./build', '../../leelenToShow')
    },

    err => {
      console.log(chalk.red('编译失败.\n'));
      console.log((err.message || err) + '\n');
      process.exit(1);
    }
  );

// Create the production build and print the deployment instructions.创建构建并打印部署生产指令
function build(previousFileSizes) {
  console.log( chalk.magenta('正在进行生产环境代码构建,请耐心等待...\n') );

  let compiler = webpack(config); //返回compiler instance

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }
      const messages = formatWebpackMessages(stats.toJson({}, true));
      if (messages.errors.length) {
        return reject(new Error(messages.errors.join('\n\n')));
      }
      if (
        process.env.CI &&
        (typeof process.env.CI !== 'string' ||
          process.env.CI.toLowerCase() !== 'false') &&
        messages.warnings.length
      ) {
        console.log(
          chalk.yellow(
            '\nTreating warnings as errors because process.env.CI = true.\n' +
              'Most CI servers set it automatically.\n'
          )
        );
        return reject(new Error(messages.warnings.join('\n\n')));
      }
      return resolve({
        stats,
        previousFileSizes,
        warnings: messages.warnings,
      });
    });
  });
}

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml,
  });
}
