import React from 'react';
import { view as ArticalList} from '../components/articles'
//import {connect} from 'react-redux';
import { Link,Route} from 'react-router-dom';


const ArticlesListPage = ({match}) => {
  return (
      <div>
           <ArticalList match={match}></ArticalList>
      </div>
  );
};


export default ArticlesListPage ;