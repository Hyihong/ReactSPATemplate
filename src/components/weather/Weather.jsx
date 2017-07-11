import React,{Component} from 'react' ;
import {connect } from 'react-redux'

class Weather extends Component {
     render(){
         const {status,cityName,weather,lowestTemp,highestTemp} = this.props;
         switch (status){
             case 'loading' :{
                 return <div>天气信息请求中...</div>
             }
             case 'sucess' :{
                 return (
                     <div>
                         {cityName}{weather}：
                         最高温度：{highestTemp}，
                         最低温度：{lowestTemp}
                     </div>
                 )
             }
             case 'failure' : {
                 return <div>获取天气失败...</div>
             }
             default :{
                  throw new Error('未知错误'+ status)
             }
         }
         
     }
}


const mapStateToProps = (state) =>{
     const weatherData = state.weather;
     return {
        status: weatherData.status,
        cityName: weatherData.city,
        weather: weatherData.weather,
        lowestTemp: weatherData.temp1,
        highestTemp: weatherData.temp2
    };
}

export default connect(mapStateToProps,null)(Weather) ;
