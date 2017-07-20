import React from 'react';
import {Route,Switch ,Redirect,Link} from 'react-router-dom';
import { combineReducers} from 'redux';

import Bundle from './Bundle'

//同步页面
import App from './pages/App';
import store from './Store';

//异步页面，代码分割，按需加载
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

const Articles = (props) => (
    <Bundle  load={(cb) => {
        require.ensure([], require => {
             const { ArticlesListPage,reducer,stateKey } = require('./pages/Articles.jsx');
               const state = store.getState();
               store.reset( combineReducers({
                    ...store._reducers,
                    articles: reducer
                  }), { 
                    ...state,
                    [stateKey]:{status:'loading'}
             })   
            cb(ArticlesListPage);
        },'articles');
    }}>
        {(Articles) => <Articles {...props}/>}
    </Bundle>
)

class Routes extends React.Component{ 
    componentDidUpdate(){
        
    }
    render(){
        return(
                <div>
                        <App>
                            <Switch>
                                <Route  exact path="/" component={Home} />
                                <Route  exact path="/home" component={Home} />
                                <Route  exact path="/ui/about" component={About} />
                                <Route  exact path="/ui/counter" component={Counter} />
                                <Route  exact path="/ui/weather" component={Weather} />
                                <Route  path="/ui/articles" component={Topics} />
                                <Redirect from='*' to='/404' /> 
                            </Switch>
                        </App>                   
                </div>
        )
    }
};


 class Topics extends React.Component{
    componentWillUpdate(nextProps){
        console.log(this.props.location)
        console.log(nextProps.location )
        console.log( "+++++++++++++++++++++++++" )
    }
      render(){ 
        const {match} = this.props
        return(
  <div>
    <h2>主题列表</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          使用 React 渲染
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          组件
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          属性 v. 状态
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>请选择一个主题。</h3>
    )}/>
  </div>
)
      }}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default Routes;


