import React from 'react';
import {BrowserRouter as Router ,Route,Switch } from 'react-router-dom';
import { combineReducers} from 'redux';

import Bundle from './Bundle'

//同步页面
import App from './pages/App';
import NotFound from './pages/NotFound';
import store from './Store'

//代码分割，按需加载
const Home = (props) => (
    <Bundle  load={(cb) => {
        require.ensure([], require => {
            cb(require('./pages/Home'));
        },'home');
    }}>
        {(Home) => <Home {...props}/>}
    </Bundle>
)

const About = (props) => (
    <Bundle  load={(cb) => {
        require.ensure([], require => {
            cb(require('./pages/About'));
        },'about');
    }}>
        {(About) => <About {...props}/>}
    </Bundle>
)

const Counter = (props) => (
    <Bundle  load={(cb) => {
        require.ensure([], require => {
             const { CounterPage,reducer, stateKey, initialState} = require('./pages/Counter.jsx');
             const state = store.getState();
             store.reset( combineReducers({
                    ...store._reducers,
                    counter: reducer
                  }), { 
                    ...state,
                    [stateKey]: initialState 
                  })
            cb(CounterPage);
        },'counter');
    }}>
        {(Counter) => <Counter {...props}/>}
    </Bundle>
)

const Routes = () => (
   <Router >
        <div>
          <App>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/ui/about" component={About} />
                <Route path="/ui/counter" component={Counter} />
                <Route component={NotFound} />
             </Switch>
          </App>
        </div>
   </Router>
);

export default Routes;


