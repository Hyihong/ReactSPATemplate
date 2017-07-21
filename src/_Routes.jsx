import React from 'react';
import {Route,Switch ,Redirect,Link,withRouter} from 'react-router-dom';
import { combineReducers} from 'redux';

import Bundle from './Bundle'

//同步页面
import store from './Store';



class Routes extends React.Component{ 
    componentWillUpdate(nextProps){
    }
    render(){
        return(
                <div>
                        <App>
                            <Switch>
                                  <Route exact path="/" component={Home}/>
                                  <Route path="/about" component={About}/>
                                  <Route path="/article" component={Article}/>
                            </Switch>
                        </App>                   
                </div>
        )
    }
};

const Home = () => (
  <div>
    <h2>首页</h2>
  </div>
)

const About = () => (
  <div>
    <h2>关于</h2>
  </div>
)

  class Article extends React.Component{
      componentWillUpdate(nextProps){
          console.log(this.props.location)
          console.log(nextProps.location )
          console.log( "+++++++++++++++++++++++++" )
      }
        render(){ 
          const {match} = this.props
          return(
          <div>
            <Switch>
                <Route exact path={`${match.url}`} component={ArticleList}/>
                <Route exact path={`${match.url}/:topicId`} component={ArticleItem}/>
            </Switch>
          </div>
  )
  }}

  class ArticleList extends React.Component{
      componentWillUpdate(nextProps){
         
      }
        render(){ 
          const {match} = this.props
          return(
          <div>
            <h2>文章列表</h2>
            <ul>
              <li>
                <Link to={`${match.url}/rendering`}>
                  使用 React 渲染
                </Link>
              </li>
              <li>
                <Link to={`${match.url}/components`}>
                  组件
                </Link>
              </li>
              <li>
                <Link to={`${match.url}/props-v-state`}>
                  属性 v. 状态
                </Link>
              </li>
            </ul>
          </div>
  )
  }}

ArticleList = withRouter(ArticleList)

const ArticleItem = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)



 class App extends React.Component{
      render(){
           
        return(
          <div>
              <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/about">关于</Link></li>
                <li><Link to="/article">文章列表</Link></li>
              </ul>
              <div>
                    { this.props.children}
              </div>
             

          </div>)
      }
};


export default Routes;


