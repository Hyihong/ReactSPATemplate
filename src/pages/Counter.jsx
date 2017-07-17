import React from 'react';

import {view as Counter,stateKey, reducer} from '../components/counter';

const CounterPage = () => {
    return (
        <div>
           <div>Counter</div>
           <Counter caption="any"/>
        </div>
    );
};

const initialState = 100 ;

export  { CounterPage,initialState, stateKey,reducer};
