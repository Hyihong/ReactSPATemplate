
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom' ;
import { fakeLogin } from './actions';
import './style.css'


import { Form, Icon, Input, Button, Checkbox,Row,Col } from 'antd';
const FormItem = Form.Item;

export const stateKey = 'login';

//判断表单内是否有错误
    function hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }


class LoginForm extends React.Component { 
    componentDidMount(){
        this.props.form.validateFields()
    }
    
    hanldeValidateLogon =()=>{
        const { getFieldValue } = this.props.form;
        this.props.onLoginin()
    }

    render(){
        const  {hasLogin} = this.props;
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        const usernameError = isFieldTouched("username") && getFieldError("username") ;
        const passwordError = isFieldTouched("password") && getFieldError("password") ;

        const isFieldsHasErrors = hasErrors(getFieldsError());

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
                                                    <FormItem validateStatus={ usernameError ? 'error':""}
                                                              help = { usernameError ? usernameError : ""}
                                                    >
                                                        {
                                                        getFieldDecorator('username',{
                                                            rules:[
                                                                 {required:true,message:"用户名不能为空"}
                                                                ]
                                                        })(
                                                        <Input prefix={<Icon type="user" style={{ fontSize: 15,color:"#fff" }} />} 
                                                               type="text" 
                                                               size="large" 
                                                               placeholder="请输入用户名"/>)
                                                        }

                                                    </FormItem>
                                                    <FormItem validateStatus={ passwordError ? 'error':""}
                                                              help = { passwordError ? passwordError : ""}
                                                    >
                                                        {
                                                        getFieldDecorator('password',{
                                                            rules:[
                                                                 {required:true,message:"密码不能为空"}
                                                                ]
                                                        })(
                                                        <Input prefix={<Icon type="lock" style={{ fontSize: 15,color:"#fff" }} />}
                                                               type="password" 
                                                               size="large" 
                                                               placeholder="请输入密码"/>)
                                                        }
                                                    </FormItem>
                                                    
                                                    <Button type="primary" htmlType="submit"  loading={this.props.isLoading}  disabled = { isFieldsHasErrors }  onClick ={ this.hanldeValidateLogon }>
                                                          {
                                                              this.props.isLoading ? "假装登录中..." : "登入系统"
                                                          }
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
    
}

LoginForm = Form.create({
   onValuesChange:(props, values)=>{
    
   }
})(LoginForm);

const mapStateToProps = (state) =>{
     return {
        hasLogin: state.login.hasLogin,
        isLoading: state.login.isLoading,
    };
}

const mapDispatchToState = (dispatch) =>{
    return({
        onLoginin : () =>{
            dispatch( fakeLogin() )
        }
    })
}

export default connect( mapStateToProps, mapDispatchToState )( LoginForm ) ;