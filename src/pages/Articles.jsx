import React from 'react';
import { Articles ,stateKey, reducer} from '../components/articles'
import { Route,Switch,Redirect,withRouter,Link} from 'react-router-dom';
import {connect} from 'react-redux'
import ArticleItem from '../components/articles/views/ArticleItem'


class ArticlesListPage extends React.Component{
    componentWillUpdate(nextProps){
        console.log(1)
    }


     componentWillMount(){
        
    }


  render(){
     const { match } = this.props;
      return (
        <div>
          <Link to="/ui/articles/react">前往react</Link>
          <Link to="/ui/articles/vue">前往vue</Link>
           <Switch>
                <Route  exact path={ match.url } component={ Articles } ></Route>
                <Route exact path= { `${match.url}/:id`} component={ArticleItem}/>
                <Redirect from='*' to='/404' /> 
          </Switch> 
        </div>
      );
  }
};

export  { ArticlesListPage,stateKey, reducer} ;