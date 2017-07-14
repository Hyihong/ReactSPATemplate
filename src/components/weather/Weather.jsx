import React,{Component} from 'react' ;
import {connect } from 'react-redux';
import { Card } from 'antd';

class Weather extends Component {
     componentDidMount(){
     }
     render(){
         const {status,cityName,weather,lowestTemp,highestTemp} = this.props;
         switch (status){
             case 'loading' :{
                 return <Card>天气信息请求中...</Card>
             }
             case 'sucess' :{
                 return (
                     <Card>
                         {cityName}{weather}：
                         最高温度：{highestTemp}，
                         最低温度：{lowestTemp}
                     </Card>
                 )
             }
             case 'failure' : {
                 return <Card>获取天气失败...</Card>
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
