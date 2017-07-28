import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router ,Route,Switch,Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'
import NotFonund from './pages/404';

import App from './App.js';
import store from './Store'
import './cover.less'
import Login   from './pages/Login'

import { LoginRoute }from './components/functional'

// const Login = (props) => (
//     <Bundle  load={(cb) => {
//         require.ensure([], require => {
//             cb(require('./pages/Login'));
//         },'Login');
//     }}>
//         {(Login) => <Address {...Login}/>}
//     </Bundle>
// )

ReactDOM.render(
    <Provider store={store}>
       <Router>
           <div>
                <Switch>
                    <Route path="/login" component = { Login }/> 
                    <Route path="/404" component={NotFonund} />
                    <LoginRoute  path="/" component={ App }/> 
                </Switch>
            </div>
       </Router>
    </Provider>      
  ,
  document.getElementById('root')
);