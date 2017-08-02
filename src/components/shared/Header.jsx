// ***  ***
// ***  file description: 导航栏 ***
// ***  ***
import React from 'react'
import { Layout,Menu,Icon} from 'antd';
import { connect } from 'react-redux';
import screenFull from "screenfull" ;
import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/t1.jpg'
import { actions } from '../loginForm';

const { Item, SubMenu } = Menu;
const { Header } = Layout  ;
const logout = actions.logout ;


class App extends React.Component{

    componentWillMount(){
       
    }

    screenFull = () => {
         
        if (screenFull.enabled) {
            screenFull.request();
        }
    }

    logout =()=>{
        localStorage.setItem("hasLogin",false);
        const { logout } = this.props ;
        logout()
    }

    render(){
       
        return (
               <Header style={{height:'56px'}}>
                   <div className="logo"><img src={logo} alt="logo"/></div>
                   <div style={{float:"right",height:"56px"}}>
                        <div className="avatar"><img src={avatar} alt="头像" /></div>
                        <div className="exit" onClick={ this.logout }><Icon type="poweroff" />退出</div>
                    </div>
                   <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['menu1']}
                        style={{ lineHeight: '56px',float:'right' }}
                    >
                        <Item key ='menu1'><Icon type="mail" />菜单一</Item>
                        <SubMenu key ='menu2' title= "菜单二XXXXXXXX" >
                             <Item key="sub1">菜单2-1</Item>
                             <Item key="sub2">菜单2-2</Item>
                        </SubMenu>
                        <Item key ='alt' onClick={ this.screenFull }> <Icon type="arrows-alt" onClick={ this.screenFull }/></Item>
                    </Menu>
                    
                    
               </Header>
               
        )
    }
}

const mapDispatchToState = (dispatch) =>{
    return({
        logout : () =>{
            dispatch( logout() )
        }
    })
}

export default connect(null,mapDispatchToState)(App)