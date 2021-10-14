import React, { Component } from "react";
import Search from "./search";
import DataDisplay from "./dataDisplay";

class AddBefore extends Component {
  state ={
    data : this.props.data,
    dataToAddBefore : ''
  }
  addBeforeText = (event)=>{
  const  finalData = this.props.data.map((item)=>{
return `${event.target.value}${item}`
    })
this.setState({
   data:finalData,
  dataToAddBefore : event.target.value
})



  }
  render() {
    return (
      <div className="md:w-1/2 w-full m-auto p-3">
        <Search 
        function={this.addBeforeText}/>
        <DataDisplay data={this.state.data} />
      </div>
    );
  }
}
export default AddBefore;
