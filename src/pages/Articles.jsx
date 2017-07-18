import React from 'react';
import { view as ArticalList} from '../components/articles'
//import {connect} from 'react-redux';


class ArticlesListPage extends React.Component{
  render(){
      return (
          <div>
              <ArticalList></ArticalList>
          </div>
      );
  }
};
export default ArticlesListPage ;