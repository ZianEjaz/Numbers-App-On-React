import React, { Component } from "react";
import FileReader from "./fileReader";

class Home extends Component {
  state = {
    data : null
  }

  passDataToHome = (childData) =>{
    this.setState({data: childData})
}


  render() {
    return (
      <div className="w-4/6 m-auto">
        {console.log(`from home component ${this.state.data}`)}
        <FileReader passDataToHome={this.passDataToHome}/>
      </div>
    );
  }
}
export default Home;
