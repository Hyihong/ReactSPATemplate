import React from 'react';
import {Route ,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';


//根据登录状态判断路由
 class LoginRoute extends React.Component {
   componentWillMount(){
      
   }

   render(){
     const { component:Component,hasLogin,...rest} = this.props
     return (
          <Route {...rest} render={props => (
            hasLogin ? (
              <Component {...props}/>
            ) : (
              <Redirect to={{
                 pathname: '/login',
              }}/>
            )
          )}/>
     )
   }
 }

const mapStateToProps = (state) =>{
     return {
        hasLogin: state.login.hasLogin,
    };
}
export default connect(mapStateToProps,null)(LoginRoute) ;