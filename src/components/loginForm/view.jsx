
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom' ;
import { loginin } from './actions';



import { Form, Icon, Input, Button, Checkbox,Row,Col } from 'antd';
const FormItem = Form.Item;

export const stateKey = 'login';

function LoginForm( {onLoginin,hasLogin} ) {

   if( !hasLogin){
       return (
            <div style={{position:"absolute",width:'100%',height:"100%"}}>
                <Row type="flex" justify="center" style={{height: "100%"}}>
                    <Col >
                        <Form style={{width: "300px"}}>
                            <FormItem>
                                <Input type="text" placeholder="请输入用户名"/>
                            </FormItem>
                            <FormItem>
                                <Input type="password" placeholder="请输入密码"/>
                            </FormItem>
                            
                            <Button type="primary" htmlType="submit" style={{width:"100%"}}  onClick ={ onLoginin }>
                                登录
                            </Button>
                        </Form>
                    </Col>
                </Row>
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