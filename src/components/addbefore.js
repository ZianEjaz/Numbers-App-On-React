import React, { Component } from "react";
import Search from "./search";
import DataDisplay from "./dataDisplay";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";

class AddBefore extends Component {
  state = {
    data: this.props.data,
    dataToAddBefore: ''
  }
  addBeforeText = (event) => {
    const finalData = this.state.data.map((item) => {
      return `${event.target.value}${item}`
    })
    this.props.updateDataToGlobalState(finalData)

  }
  render() {
    return (
      <div className="md:w-1/2 w-full m-auto p-3">
        <Animated animationIn="animate__slideInDown" animationOut="animate__zoomOut" isVisible={true}>
          <Link
            className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
            to="/"
          >
            Upload File

          </Link>
          <Search
            function={this.addBeforeText} />
          <DataDisplay data={this.props.data} />

        </Animated>
      </div>
    );
  }
}
export default AddBefore;
