import React,{Component} from 'react' ;
import {connect } from 'react-redux'
import { fetchWeather } from './action'


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

     handleChange = (e) =>{
         const cityCode = e.target.value ;
         this.props.fetchWeather( CITY_CODES[cityCode] )
     }
     
     render(){
         return(
             <div>
             <select onChange={ this.handleChange }>
                 <option value="beijing">北京</option>
                 <option value="shanghai">上海</option>
                 <option value="guangzhou">广州</option>
                 <option value="shenzhen">深圳</option>
             </select>
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
