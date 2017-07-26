
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux'
import { increment,decrement} from './actions'
import { Cascader } from 'antd';
import { mapChinaDivisionJson } from "../../tools/mapChinaDivisionJson" 
import divisionJson from '../../DB/address3.json'

const options = new mapChinaDivisionJson( divisionJson ) ;

function onChange(value, selectedOptions) {
   console.log(value);
   console.log(selectedOptions);
}

class ChinaDivision extends React.Component{
    constructor(){
       super()
    }

    componentWillMount(){
     
    }

    
    render(){
        return(
           <Cascader options={options} onChange={onChange} placeholder="请选择城市" style={{width:'300px'}} />
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
