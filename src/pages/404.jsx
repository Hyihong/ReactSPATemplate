import React from 'react';

class Home extends React.Component {
  componentWillMount(){
     document.title="404"
  }
  render(){
    return (
      <div >
        <div> react work ,but 404 Page not Found</div>
      </div>
    );
  }
};


export default Home;