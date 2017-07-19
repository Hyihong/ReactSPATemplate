
import React from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators} from 'redux'
import { Link,Route,withRouter,Switch,Redirect} from 'react-router-dom';
import { fetchArticles} from '../actions'
import { Card,Spin  } from 'antd';
import ArticleItem from './ArticleItem'
import NotFonund from '../../../pages/404';
import '../style.css'

class Articles extends React.Component {
    componentWillMount(){
    }

    componentDidMount(){
        if(this.props.location.pathname === '/ui/articles'){
              this.props.fetchArticles()
        }
        
    }

    componentWillUpdate(nextProps){

    }

    render(){
        const { status,articles,match } = this.props;
        if(this.props.location.pathname === '/ui/articles'){
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
        }else{
            return (<Switch>
                        <Route exact path="/ui/articles/:id" component={ArticleItem}/>
                        <Redirect from='*' to='/404' />
                    </Switch>)
                 
        }
    }
}


const mapStateToProps = (state) => {
    const articles = state.articles;
    //console.log( articles.items )
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
