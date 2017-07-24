
import React from 'react';
import { Link,Route,withRouter} from 'react-router-dom'
import { connect } from 'react-redux';

class Base extends React.Component{
    constructor(){
         super()
    }

    componentWillMount(){

    }

    
    render(){
        return(
            <div>
                <h3>Base父组件</h3>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/about">关于</Link></li>
                    <li><Link to="/topics">主题列表</Link></li>
                </ul>

                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


export default Base;