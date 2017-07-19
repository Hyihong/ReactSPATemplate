import React from 'react';
import { Articles ,stateKey, reducer} from '../components/articles'
//import {connect} from 'react-redux';


class ArticlesListPage extends React.Component{
  componentWillMount(){
     
  }
  render(){
      return (
          <div>
              <Articles></Articles>
          </div>
      );
  }
};
export  {ArticlesListPage,stateKey, reducer} ;