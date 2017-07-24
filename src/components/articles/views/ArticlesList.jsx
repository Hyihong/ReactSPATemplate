
import React from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators} from 'redux'
import { Link,withRouter,Route} from 'react-router-dom';
import { fetchArticles} from '../actions'
import { Card,Spin  } from 'antd';
import ArticleItem from './ArticleItem'
import '../style.css'

class Articles extends React.Component {

    componentDidMount(){
        //如果页面时从详情页返回，则不刷新
        //判断条件：1、有返回路径的属性 2、操作动作为'POP' 3、此时在store中的status不为'loading'加载状态
        if( this.props.previousLocation && this.props.history.action.toLocaleUpperCase()==='POP' && this.props.status!=='loading'){
             console.log("从详情页返回,不刷新页面")
             return; 
        }
        
        this.props.fetchArticles() 
    }

    render(){
        const { status,articles,match } = this.props;
        switch ( status ){
            case 'loading' :
                return <div style={{textAlign:'center',verticalAlign:'middle',height:'100%',marginTop:'100px'}}><Spin tip="正在加载，请稍后..." size="large"></Spin></div>
            case 'sucess' :
                return <div>
                        <ul>{
                            articles.map( article => (
                                <li key={article.id}>
                                    <Card   title={ 
                                                <Link to={{
                                                            pathname: `${match.url}/${article.name}`,
                                                        }}> 
                                                    <b style={{fontSize:'18px'}}> {article.name} </b> 
                                                </Link>} 
                                            style={{marginTop:'10px'}}>
                                         <p><b>描述: </b>{ article.description }</p>
                                        <p><b>Star: </b>{ article.stargazers_count}</p> 
                                    </Card> 
                                </li>
                        ))
                        }</ul>
                    </div>
            case 'failure' :
                return <div>获取失败</div>
            default :
                return <div>未知错误</div>
        }     
        
    }
}


const mapStateToProps = (state) => {
    const articles = state.articles;
    return {
        status:articles.status,
        articles:articles.items
    } 
}


const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => {
     dispatch(fetchArticles());
  },
});



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Articles));
