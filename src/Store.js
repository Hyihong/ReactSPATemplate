import {createStore, combineReducers, compose  } from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as sharedReducer } from './components/shared'
import resetEnhancer from './middleWare/reset.js'

const win = window;

const originalReducers = {
    routing: routerReducer,
    shared: sharedReducer
}

const reducer =  combineReducers(originalReducers)

// Build the middleware for intercepting and dispatching navigation actions
//const middleware = routerMiddleware( createHistory())

const storeEnhancers = compose(
  resetEnhancer,
  (win && win.devToolsExtension) ? win.devToolsExtension() : f => f
);

const store = createStore(reducer, {}, storeEnhancers);
store._reducers = originalReducers

export default store;