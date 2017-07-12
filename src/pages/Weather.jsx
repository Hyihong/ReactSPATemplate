import React from 'react';

import {Weatherview as Weather, SelectCityView as SelectCity,stateKey, reducer} from '../components/weather';

const WeatherPage = () => {
return (
<div>
   <div>通过中国天气网提供的API进行天气查询</div>
       <SelectCity></SelectCity>
       <Weather></Weather>
  </div>
);
};

//const initialState = 100 ;

export  { WeatherPage, stateKey,reducer};
