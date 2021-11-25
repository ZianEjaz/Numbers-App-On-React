import React, { Component } from "react";
import Search from "./search";
import DataDisplay from "./dataDisplay";
import { Animated } from "react-animated-css";


class AddEnd extends Component {
  state ={
    data : this.props.data,
    dataToAddBefore : ''
  }
  addBeforeText = (event)=>{
  const  finalData = this.state.data.map((item)=>{
return `${item}${event.target.value}`
    })
    this.props.updateDataToGlobalState(finalData)



  }
  render() {
    return (
      <div className="md:w-1/2 w-full m-auto p-3">
         <Animated animationIn="animate__zoomIn" animationOut="animate__zoomOut" isVisible={true}>
        <Search 
        function={this.addBeforeText}/>
        <DataDisplay data={this.props.data} />
        </ Animated >
      </div>
    );
  }
}
export default AddEnd;
