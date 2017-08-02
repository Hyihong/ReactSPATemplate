import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router ,Route,Switch,Redirect } from 'react-router-dom';
import { Provider } from 'react-redux'
import NotFonund from './pages/404';

import App from './App.js';
import store from './Store'
import './cover.less'
import { LoginRoute,Bundle }from './components/functional'

//Login按需加载
const Login = (props) => (
    <Bundle  load={(cb) => {
        require.ensure([], require => {
            cb(require('./pages/Login'));
        },'Login');
    }}>
        {(Login) => <Login {...Login}/>}
    </Bundle>
)

ReactDOM.render(
    <Provider store={store}>
       <Router>
           <div>
                <Switch>
                    <Route exact path="/login" component = { Login }/> 
                    <Route exact path="/404" component={NotFonund} />
                    <LoginRoute  path="/" component={ App }/> 
                </Switch>
            </div>
       </Router>
    </Provider>      
  ,
  document.getElementById('root')
);