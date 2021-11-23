import React, { Component } from "react";
import FileReader from "./fileReader";
import DataDisplay from "./dataDisplay";
import Search from "./search";
import { Animated } from "react-animated-css";
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Home extends Component {
  state = {
    fileData: {
      fileReadSucessfully: false,
      fileInfo: {},
      data: [],
      numbersArray: [],
    },
    filtered: [],
    keyword: "",
    animationChange: "animate__zoomIn",
  };

  passFileDataToHomeState = (childData) => {
    this.setState({ fileData: childData });
    //sending data to global state
    this.props.globalStateDataImport(this.state.fileData.numbersArray);
  };

  searchNumbers = (event) => {
    let keyword = event.target.value;
    let filtered = this.state.fileData.numbersArray.filter((item) => {
      return item.toString().indexOf(keyword) > -1;
    });
    this.setState({
      filtered,
      keyword,
    });
  };

  render() {
    return (
      <div className="w-4/6 mx-auto">
        <Animated animationIn="animate__zoomIn" animationOut="animate__zoomOut" animationInDuration={500} animationOutDuration={500} isVisible={true}>
          <div className="flex flex-wrap ">

            <div className="flex flex-wrap text-white text-xl w-full lg:w-1/4 content-start">
              <Animated animationIn={this.state.animationChange} animationOut="animate__zoomOut" isVisible={true}>
                <Search
                  function={this.searchNumbers}
                  placeholder={"Search Numbers"}
                  type={'number'}
                />

                <div className={`p-5 mt-8 rounded-2xl w-full shadow-3xl ${this.state.fileData.fileReadSucessfully ? 'shadow-sucess-3xl' : 'shadow-fail-3xl'} bg-grey-900`} >
                  <p>Upload a CSV file to import Contacts</p>

                  <FileReader
                    passFileDataToHomeState={this.passFileDataToHomeState}
                  />
                </div>
              </ Animated >
            </div>

            <div className="text-white p-2 md:p-8 rounded-2xl mt-8 w-screen md:w-2/3 mx-auto mt-8 relative shadow-3xl bg-grey-950">
              <Animated animationIn={this.state.animationChange} animationOut="animate__zoomOut" isVisible={true}>
                <h3 className="text-2xl">
                  File Name: {this.state.fileData.fileInfo.name}
                </h3>
                <h3>File Type: {this.state.fileData.fileInfo.type}</h3>

                {this.state.keyword === "" ? (
                  <h3>
                    Total Numbers Imported {this.state.fileData.numbersArray.length}
                  </h3>
                ) : (
                  <h3 className="text-2xl p-4 rounded-2xl m-5">
                    Total Numbers Found:
                    <span className="m-4">{this.state.filtered.length}</span>
                  </h3>
                )}

                {this.state.keyword === "" ? (
                  <DataDisplay data={this.state.fileData.numbersArray} />
                ) : (
                  <DataDisplay data={this.state.filtered} />
                )}
                <div className=" "></div></ Animated >
            </div>
          </div>
        </ Animated >
      </div>
    );
  }
}

export default Home;
