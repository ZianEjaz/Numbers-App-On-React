import React, { Component } from "react";
import Search from "./search";
import DataDisplay from "./dataDisplay";

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
      <div className="w-4/6 m-auto">
        <Search 
        function={this.addBeforeText}/>
        <DataDisplay data={this.state.data} />
      </div>
    );
  }
}
export default AddEnd;
