import React from 'react';
import { Articles ,stateKey, reducer} from '../components/articles'
//import App from './App'
//import {connect} from 'react-redux';


class ArticlesListPage extends React.Component{
  componentWillMount(){
     
  }
  render(){
      return (
          <div>   
            <div>
                <Articles></Articles>
            </div>
          </div>
      );
  }
};
export  {ArticlesListPage,stateKey, reducer} ;