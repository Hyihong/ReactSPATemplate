import {createStore, combineReducers, compose,  applyMiddleware} from 'redux';
import { routerReducer } from 'react-router-redux'
import Perf from 'react-addons-perf' ;
import { reducer as sharedReducer } from './components/shared'
import { reducer as weatherReducer } from './components/weather'
import { reducer as counterReducer } from './components/counter'
import { reducer as articlesReducer } from './components/articles'
import { reducer as loginReducer } from './components/loginForm'
import resetEnhancer from './middleWare/reset.js' 
//中间件
import promise from './middleWare/promise' 

const win = window;

if (process.env.NODE_ENV !== 'production') {
    win.Perf = Perf ;
}


const originalReducers = {
    routing: routerReducer,
    shared: sharedReducer,
    weather: weatherReducer,
    counter: counterReducer,
    articles: articlesReducer,
    login: loginReducer
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