import React from 'react';

import  chinaDivision from '../components/chinaDivision';
import { Layout} from 'antd';
import {view as ChinaDivision,stateKey, reducer} from '../components/chinaDivision';

const { Content } = Layout ;

 class Address extends React.Component{
      componentWillMount(){
          document.title="地址"
      }
      render(){
           
        return(
          <div>
              <div>请选择：</div>
              <ChinaDivision></ChinaDivision>
          </div>)
      }
};

export default Address;