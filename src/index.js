import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router ,Route,Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import NotFonund from './pages/404';

import Routes from './Routes.js';
//import Routes from './pages/_App.jsx';
import store from './Store'
import './cover.less'

ReactDOM.render(
    <Provider store={store}>
       <Router>
            <Switch>
                <Route path="/404" component={NotFonund} />
                <Route component={ Routes } />
            </Switch>
       </Router>
    </Provider>      
  ,
  document.getElementById('root')
);