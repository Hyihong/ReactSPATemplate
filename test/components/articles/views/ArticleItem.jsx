import React from 'react';
import { withRouter} from 'react-router-dom';
class ArticleItem extends React.Component{
    componentWillMount(){
       
    }
    componentWillUpdate(nextProps){
        console.log(1)
    }

    render(){
       const { match } =  this.props;
       return <div>{match.params.id}</div>
    }
}

export default withRouter(ArticleItem) ;