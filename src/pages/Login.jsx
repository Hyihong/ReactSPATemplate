
import React from 'react';
import { view as LoginFrom } from '../components/loginForm'

class Login extends React.Component{
    constructor(){
         super()
    }

    componentWillMount(){
        document.title="登录页"
    }

    
    render(){
        return(
            <div>
                <LoginFrom></LoginFrom>
            </div>
        )
    }
}


export default Login;