import React, { Component } from "react";
import Search from "./search";
import DataDisplay from "./dataDisplay";
import { Link } from "react-router-dom";

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
        <Link
className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
to="/"
>
Upload File

</Link>
        <Search 
        function={this.addBeforeText}/>
        <DataDisplay data={this.state.data} />
      </div>
    );
  }
}
export default AddBefore;
