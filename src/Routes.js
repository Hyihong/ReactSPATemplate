import React from 'react';
import {BrowserRouter as Router ,Route,Switch } from 'react-router-dom';
import { combineReducers} from 'redux';

import Bundle from './Bundle'

//同步页面
import App from './pages/App';
import NotFonund from './pages/404';
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

const Weather = (props) => (
    <Bundle  load={(cb) => {
        require.ensure([], require => {
             const { WeatherPage,reducer, stateKey } = require('./pages/Weather.jsx');
             const state = store.getState();
             store.reset( combineReducers({
                    ...store._reducers,
                    weather: reducer
                  }), { 
                    ...state,
                    [stateKey]:{status:'loading'}
                  })
            cb(WeatherPage);
        },'weather');
    }}>
        {(Weather) => <Weather {...props}/>}
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
                <Route path="/ui/weather" component={Weather} />
                <Route path="/ui/article" component={Weather} />
                <Route component={NotFonund} />
             </Switch>
            
          </App>
          
        </div>
   </Router>
);

export default Routes;


