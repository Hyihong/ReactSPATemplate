import React from 'react';
import { withRouter} from 'react-router-dom';
class ArticleItem extends React.Component{
    render(){
       const { match } =  this.props;
       return <div>{match.params.id}</div>
    }
}

export default withRouter(ArticleItem) ;