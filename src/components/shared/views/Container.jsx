import React from 'react';

import  Header  from './Header';
import  SilderMenu from './SilderMenu';
import { Layout} from 'antd';
const { Content } = Layout ;

 class Container  extends React.Component{
      componentWillMount(){
      }
      render(){
           
        return(
          <div >
            <Layout className="app-context-container" style={{width:"100%","minWidth":"1200px",height:'100%',position:'absolute'}} >
                <Header></Header>
                <Layout style={{width:"100%","minWidth":"1200px",height:'100%'}} className="ant-layout-has-sider">
                    <SilderMenu current= {this.props.current}  openKeys= {this.props.openKeys}></SilderMenu>
                    <Content style={{ padding: '0 5px 0 10px',margin:'10px 0 5px 0',overflow:'auto' }}>
                         {this.props.children}
                    </Content>
                </Layout>
            </Layout>
          </div>)
      }
};

export default Container ;