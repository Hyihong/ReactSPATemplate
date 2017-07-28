import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes.js';

export const fetchWeather = (cityCode) =>{
    const apiUrl = `/data/cityinfo/${cityCode}.html`;
    return {
        promise:fetch( apiUrl ).then(response => {
            if( response.status !== 200){
                throw new Error("获取失败")
            }
            
            return response.json().then( responseJson  => responseJson.weatherinfo)
        }),
        //promise:  fetch( apiUrl ),
        types: [FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE]
    }
}

