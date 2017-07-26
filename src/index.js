import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router ,Route,Switch,Link } from 'react-router-dom';
import { Provider } from 'react-redux'
import NotFonund from './pages/404';

import Routes from './Routes.js';
//import Routes from './_Routes.jsx';
import store from './Store'
import './cover.less'

ReactDOM.render(
    <Provider store={store}>
       <Router>
           <div>
            <Switch>
                <Route path="/404" component={NotFonund} />
                <Route component={ Routes } />
            </Switch>
            </div>
       </Router>
    </Provider>      
  ,
  document.getElementById('root')
);