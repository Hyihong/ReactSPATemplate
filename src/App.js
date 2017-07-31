import React from 'react';
import {Route,Switch ,Redirect,Link,withRouter} from 'react-router-dom';
import { combineReducers} from 'redux';
import { Bundle }from './components/functional'

//同步页面
import Container from './pages/Container';
import store from './Store';
//import Address   from './pages/Address'


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

class Articles extends React.Component{
    componentWillUpdate(nextProps){
         this.previousLocation = this.props.location;
    }
    render(){
        const  props  = this.props ;
        return (
            //Bundle使用处
            <Bundle  load={
                        function(cb) {
                            require.ensure([], require => 
                                {
                                    const { Articles,reducer,stateKey } = require('./pages/Articles.jsx');
                                    cb(Articles);
                                },'articles');
                        }}
                >
                { (Articles) => <Articles { ...props } previousLocation={ this.previousLocation}  /> }
            </Bundle>
        )
    }
}

const Address = (props) => (
    <Bundle  load={(cb) => {
        require.ensure([], require => {
            cb(require('./pages/Address'));
        },'Address');
    }}>
        {(Address) => <Address {...props}/>}
    </Bundle>
)



class App extends React.Component{ 
    render(){
        return(
                <div>   
                        <Container >
                            <Switch>
                                <Route  exact path="/hyihong.github.io/leelenToShow" component={Home} />
                                <Route  exact path="/" component={Home} />
                                <Route  exact path="/home" component={Home} />
                                <Route  exact path="/ui/about" component={About} />
                                <Route  exact path="/ui/counter" component={Counter} />
                                <Route  exact path="/ui/weather" component={Weather} />
                                <Route  path="/ui/articles" component={Articles} />
                                <Route  path="/ui/address" component={Address} />
                                <Redirect from='*' to='/404' />  
                            </Switch>
                        </Container >
                </div>
        )
    }
};

export default App;


