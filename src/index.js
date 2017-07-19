import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router ,Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import Routes from './Routes.js';
//import Routes from './pages/_App.jsx';
import store from './Store'
import './cover.less'

ReactDOM.render(
    <Provider store={store}>
       <Router>
           <Route component={ Routes } />
       </Router>
    </Provider>      
  ,
  document.getElementById('root')
);