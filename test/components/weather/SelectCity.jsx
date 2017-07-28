import React,{Component} from 'react' ;
import {connect } from 'react-redux'
import { fetchWeather } from './action'

//antd
import { Select } from 'antd';
const Option = Select.Option;


const CITY_CODES = {
  'beijing': 101010100,
  'shanghai': 101020100,
  'guangzhou': 101280101,
  'shenzhen': 101280601
};


class selectCity extends Component {
     componentDidMount(){
         const { fetchWeather } = this.props;
         fetchWeather(CITY_CODES.beijing)
     }

     handleChange = (value) =>{
         const cityCode = value ;
         this.props.fetchWeather( CITY_CODES[cityCode] )
     }
     
     render(){
         return(
             <div>
             <Select defaultValue="beijing" style={{ width: 120 }} onChange={ this.handleChange }>
                 <Option value="beijing">北京</Option>
                 <Option value="shanghai">上海</Option>
                 <Option value="guangzhou">广州</Option>
                 <Option value="shenzhen">深圳</Option>
             </Select>
             </div>
         )
     }
}

const mapDispatchToProps = (dispatch) => ({
  fetchWeather: (cityCode) => {
     dispatch(fetchWeather(cityCode));
  },
  resetReducer :() =>{
  }
});


export default connect(null,mapDispatchToProps)(selectCity) ;
