
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux'
import { increment,decrement} from './actions'
import { Cascader } from 'antd';

const options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

class ChinaDivision extends React.Component{
    constructor(){
       super()
    }

    componentWillMount(){
        //  fetch("../../DB/address3.json").then( () => {
        //      console.log(1)
        //  })
    }

    
    render(){
        return(
           <Cascader options={options} onChange={onChange} placeholder="请选择城市" />
        )
    }
}

// const mapStateToProps = (state) => ({
//      value: state[stateKey] || 0
// })

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//     onIncrement: increment,
//     onDecrement: decrement
// }, dispatch);

export default connect(null, null)(ChinaDivision);
