import React from 'react';

import  Header  from '../components/shared/Header';
import  SilderMenu from '../components/shared/SilderMenu';
import { Layout} from 'antd';
const { Content } = Layout ;

 class App extends React.Component{
      componentWillMount(){
         

      }
      render(){
           
        return(
          <div>
            <Layout style={{width:"100%","minWidth":"1200px",height:'100%',position:'absolute'}} >
                <Header></Header>
                <Layout style={{width:"100%","minWidth":"1200px",height:'100%'}} className="ant-layout-has-sider">
                    <SilderMenu current= {this.props.current}  openKeys= {this.props.openKeys}></SilderMenu>
                    <Content style={{ padding: '10px 15px' }}>

                         {this.props.children}
                    </Content>
                </Layout>
            </Layout>
          </div>)
      }
};

export default App;