// ***  ***
// ***  file description: 侧边菜单 ***
// ***  ***
import React from 'react'
import { Menu,Icon } from 'antd';
import { connect } from 'react-redux';
import { Link,withRouter} from 'react-router-dom';
import { changeMenu, menuitemclick,initialize} from './actions'

const { Item, SubMenu } = Menu;
//const { Sider } = Layout

export const stateKey = 'silderMenu';

class SilderMenu extends React.Component{
    componentWillMount(){
        const {location,onInitializeMenu} = this.props;
        const initCurrent = location.pathname ;
        const openKeys = [ location.pathname.split('/')[1] ]
        onInitializeMenu(initCurrent,openKeys ) 

    }

    componentWillReceiveProps(){
    }
  
    handleMenuClick = (e) =>{
        const {  onClickMenuItem } = this.props; 
        onClickMenuItem(e.key)
    }


   //只展开当前父级菜单
    handleOpenChange =( newOpenKeys )=>{
        const {  openKeys,onOpenChange } = this.props; //原数据
        const latestOpenKey = newOpenKeys.find(key => !(openKeys.indexOf(key) > -1));
        const latestCloseKey = openKeys.find(key => !(newOpenKeys.indexOf(key) > -1));
        let nextOpenKeys = [];
         if (latestOpenKey) {
            nextOpenKeys = this._getAncestorKeys(latestOpenKey).concat(latestOpenKey);
         }
        if (latestCloseKey) {
        nextOpenKeys = this._getAncestorKeys(latestCloseKey);
        }
        // this.setState({ openKeys: nextOpenKeys });
        onOpenChange(nextOpenKeys)
    }

    _getAncestorKeys = (key) => {
        const map = {
           sub3: ['sub2'],
        };
        return map[key] || [];
    }

    render(){
        const {current, openKeys } = this.props;
                
        return(
            <div  style={{width:"180px",height:"100%",background:"#404040",flexShrink:'0'}}>
            <Menu
                theme="dark"
                mode="inline"
                openKeys={ openKeys }
                selectedKeys={ [current]}
                current = { current }
                onOpenChange = { this.handleOpenChange }
                onClick = {this.handleMenuClick}
            >
                <Item key="/home"><Link to="/home"><Icon type="home"></Icon>首页</Link></Item>
                <SubMenu key ='ui' title= { <div><Icon type="laptop" /><span>UI</span></div>}>
                    <Item key="/ui/counter"><Link to="/ui/counter"><Icon type="exception" />计数器</Link></Item>
                    <Item key="/ui/about"><Link to="/ui/about"><Icon type="heart" />关于</Link></Item>
                    <Item key="/ui/weather"><Link to="/ui/weather" ><Icon type="heart" />天气查询</Link></Item>
                    <Item key="/ui/articles"><Link to="/ui/articles" ><Icon type="heart" />前端库排行</Link></Item>
                </SubMenu>
                <SubMenu key ='other' title= { <div><Icon type="laptop" /><span>其他</span></div>}>
                    <Item key="/other/other1"><Link to="/other/other1">计数器</Link></Item>
                    <Item key="/other/other2"><Link to="/other/other2">关于</Link></Item>
                </SubMenu>
            </Menu>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
     const shared = state.shared ;
     return {
         current: shared.current,
         openKeys: shared.openKeys,
    };
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        onOpenChange:  newOpenKeys  => {
            dispatch( changeMenu(newOpenKeys));
        },
        onClickMenuItem : current => {
            dispatch( menuitemclick(current) )
        },
        onInitializeMenu : (current,OpenKeys) =>{
            dispatch( initialize(current,OpenKeys))
        } 

    }
       
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SilderMenu)) ;