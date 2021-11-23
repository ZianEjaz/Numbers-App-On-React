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
  const  finalData = this.props.data.map((item)=>{
return `${item}${event.target.value}`
    })
this.setState({
   data:finalData,
  dataToAddBefore : event.target.value
})



  }
  render() {
    return (
      <div className="md:w-1/2 w-full m-auto p-3">
         <Animated animationIn="animate__zoomIn" animationOut="animate__zoomOut" isVisible={true}>
        <Search 
        function={this.addBeforeText}/>
        <DataDisplay data={this.state.data} />
        </ Animated >
      </div>
    );
  }
}
export default AddEnd;
