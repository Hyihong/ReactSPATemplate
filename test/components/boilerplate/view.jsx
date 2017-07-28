
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux'
import { increment,decrement} from './actions'
import { Button } from 'antd';

export const stateKey = 'counter';

function Counter({onIncrement, onDecrement, value}) {
return (
    <div>
            <Button  onClick={onIncrement}>+</Button>
            <span>Count: {value}</span>
            <Button  onClick={onDecrement}>-</Button>
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
