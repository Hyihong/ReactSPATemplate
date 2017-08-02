import React from 'react';
import {Route ,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from '../loginForm'

const setLoginStatus = actions.setLoginStatus;

//根据登录状态判断路由
 class LoginRoute extends React.Component {
   componentWillMount(){
       let _hasLogin =   localStorage.getItem('hasLogin');
       if( _hasLogin !== 'false' ){
            //读取到本地数据，为已登录状态
            this.props.setLoginStatus( _hasLogin )
       }
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

const mapDispatchToProps = (dispatch) => ({
    setLoginStatus: ( hasLogin ) => {
      dispatch( setLoginStatus( hasLogin ));
    }
});


export default connect(mapStateToProps,mapDispatchToProps)(LoginRoute) ;