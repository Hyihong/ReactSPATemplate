
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux'
import { increment,decrement} from './actions'

export const stateKey = 'counter';

function Counter({onIncrement, onDecrement, value}) {
return (
    <div>
            <button  onClick={onIncrement}>+</button>
            <span>Count: {value}</span>
            <button  onClick={onDecrement}>-</button>
    </div>
);
}


const mapStateToProps = (state) => ({
     value: state[stateKey] || 0
})
const mapDispatchToProps = (dispatch) => bindActionCreators({
    onIncrement: increment,
    onDecrement: decrement
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
