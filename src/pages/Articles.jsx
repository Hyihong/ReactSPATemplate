import React from 'react';
import {  ArticlesList,stateKey, reducer} from '../components/articles'
//import Articles from "../components/articles/views/Articles"
import { Route,Switch,Redirect,withRouter,Link} from 'react-router-dom';
import {connect} from 'react-redux'
import ArticleItem from '../components/articles/views/ArticleItem'


// const AddPropsRoute = ({ component: Component, previousLocation:previousLocation,...rest }) => (
//   <Route {...rest} render={ (props,previousLocation) => (
//        <Component {...props} previousLocation={previousLocation} />
//   )}/>
// )
//由于异步加载，故无法将page/Articles的nextProps参数传入到子组件中
//所以在此处要获取异步加载时传入的nextProps,并包装<Route>，传入子组件props,
class AddPropsRoute extends React.Component{
   render(){
      const { component: Component, previousLocation,...rest } = this.props;
      return(
           <Route {...rest} render={ (props) => (
                <Component {...props} previousLocation={ previousLocation} test={"sss"}/>
            )}/>
      )
   }
}


class Articles extends React.Component{
    componentWillUpdate(nextProps){
       
    }


     componentWillMount(){
        document.title="列表"
        this.previousLocation = this.props.previousLocation ? this.props.previousLocation : null ;
    }


  render(){
     const { match } = this.props;
      return (
        <div>
           <Switch>
                <AddPropsRoute  exact path={ match.url }  component={ArticlesList} previousLocation={this.previousLocation}></AddPropsRoute>
                <Route  exact path= { `${match.url}/:id`} component={ArticleItem}/>
                <Redirect from='*' to='/404' />  
          </Switch> 
        </div>
      );
  }
};

export  { Articles,stateKey, reducer} ;