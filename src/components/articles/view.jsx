
import React from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators} from 'redux'
import { Link,Route} from 'react-router-dom';
import { fetchArticles} from './actions'
import { Card,Spin  } from 'antd';
import './style.css'

export const stateKey = 'articles';

const Article =( {match} )=>{
    return <div>{match.params}</div>
}

class Articles extends React.Component {
    componentDidMount(){
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
                                    <Card title={ 
                                                <Link to={ {
                                                            pathname: `${match.url}/article`,
                                                            //search:`?id=${i++}`
                                                        }}> 
                                                    <b style={{fontSize:'18px'}}> {article.name} </b> 
                                                </Link>} 
                                                style={{marginTop:'10px'
                                    }}>
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



export default connect(mapStateToProps, mapDispatchToProps)(Articles);

// articles.map( article => (
//                                 <li key={article.id}>
//                                     <Card title={ 
//                                                 <Link to={ {
//                                                             pathname: `${match.url}/article`,
//                                                             //search:`?id=${i++}`
//                                                         }}> 
//                                                     <b style={{fontSize:'18px'}}> {article.name} </b> 
//                                                 </Link>} 
//                                                 style={{marginTop:'10px'
//                                     }}>
//                                         <p><b>描述: </b>{ article.description }</p>
//                                         <p><b>Star: </b>{ article.stargazers_count}</p>
//                                     </Card>
//                                 </li>
//                            ))