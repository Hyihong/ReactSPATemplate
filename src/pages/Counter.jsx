import React from 'react';
import {view as Counter,stateKey, reducer} from '../components/counter';
//import App from './App'

const CounterPage = () => {
    return (
        <div> 
            <div>
            <div>Counter</div>
            <Counter caption="any"/>
            </div>
        </div>
    );
};

const initialState = 100 ;

export  { CounterPage,initialState, stateKey,reducer};
