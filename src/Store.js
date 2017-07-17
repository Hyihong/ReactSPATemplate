import {createStore, combineReducers, compose,  applyMiddleware} from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as sharedReducer } from './components/shared'
import { reducer as weatherReducer } from './components/weather'
import { reducer as counterReducer } from './components/counter'
import { reducer as articlesReducer } from './components/articles'
import resetEnhancer from './middleWare/reset.js' 
import promise from './middleWare/promise' //中间件

const win = window;

const originalReducers = {
    routing: routerReducer,
    shared: sharedReducer,
    weather: weatherReducer,
    counter: counterReducer,
    articles: articlesReducer
}

const reducer =  combineReducers(originalReducers)
const middleWare = [promise]

const storeEnhancers = compose(
  applyMiddleware(...middleWare),
  resetEnhancer,
  (win && win.devToolsExtension) ? win.devToolsExtension() : f => f
);

const store = createStore(reducer, {}, storeEnhancers);
store._reducers = originalReducers

export default store;