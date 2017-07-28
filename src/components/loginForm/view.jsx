
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom' ;
import { loginin } from './actions';
import './style.css'


import { Form, Icon, Input, Button, Checkbox,Row,Col } from 'antd';
const FormItem = Form.Item;

export const stateKey = 'login';

function LoginForm( {onLoginin,hasLogin} ) {

   if( !hasLogin){
       return (
            <div className="containter">
                <div className="bg"></div>
                <div className="loginBox" >
                    <Row type="flex" justify="center" align="middle" style={{height: "100%"}} >
                        <Col style={{position:'relative'}}>
                            <div className="loginPanel"></div>
                            <Row type="flex" align="middle" style={{margin:"20px"}}>
                                <Col style={{zIndex:11}}>
                                    <div className="site">
                                        <span>maybeLogo</span>
                                    </div>
                                </Col>
                                <Col style={{zIndex:11}}>
                                    <div className="loginFrom">
                                        <Form  style={{width: "250px"}}>
                                            <FormItem>
                                                <Input type="text" size="large" placeholder="请输入用户名"/>
                                            </FormItem>
                                            <FormItem>
                                                <Input type="password" size="large" placeholder="请输入密码"/>
                                            </FormItem>
                                            
                                            <Button type="primary" htmlType="submit"   onClick ={ onLoginin }>
                                                登录
                                            </Button>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
            
        );
   }else{
       return(
       <Redirect to={{
           pathname: '/',
       }}/>)
   }
    
}



const mapStateToProps = (state) =>{
     return {
        hasLogin: state.login.hasLogin,
    };
}

const mapDispatchToState = (dispatch) =>{
    return({
        onLoginin : () =>{
            dispatch( loginin() )
        }
    })
}

export default connect( mapStateToProps, mapDispatchToState )( LoginForm ) ;