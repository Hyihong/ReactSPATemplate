import React from 'react';
class Home extends React.Component {
   componentWillUpdate(nextProps) {
      console.log(1)
   }

   componentWillMount(){
     
   }

  render(){
    return (
      <div > 
          主页
      </div>
    );
  }
};

export default Home;