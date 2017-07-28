
import React from 'react';
import { connect } from 'react-redux';
import { Cascader } from 'antd';
import { mapChinaDivisionJson } from "../../tools/mapChinaDivisionJson" 
import divisionJson from '../../DB/address3.json'

const options = new mapChinaDivisionJson( divisionJson ) ;

function onChange(value, selectedOptions) {
  
}

class ChinaDivision extends React.Component{    
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
