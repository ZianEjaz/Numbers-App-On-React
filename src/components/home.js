import React, { Component } from "react";
import FileReader from "./fileReader";
import DataDisplay from "./dataDisplay";
import Search from "./search";

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
      <div className="w-4/6 m-auto">
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-wrap text-white text-xl w-full lg:w-1/4 content-start">
            <Search
              function={this.searchNumbers}
              placeholder={"Search Numbers"}
              type ={'number'}
            />
            <div className="p-5 mt-8 bg-purple-600 rounded-2xl w-full">
              <p>Upload a CSV file to import Contacts</p>

              <FileReader
                passFileDataToHomeState={this.passFileDataToHomeState}
              />
            </div>
          </div>
          <div className="text-white bg-purple-700 p-8 rounded-2xl mt-8 w-full lg:w-2/3 m-auto relative animate__bounceInDown">
            <h3 className="text-2xl">
              File Name: {this.state.fileData.fileInfo.name}
            </h3>
            <h3>File Type: {this.state.fileData.fileInfo.type}</h3>

            {this.state.keyword === "" ? (
              <h3>
                Total Numbers Imported {this.state.fileData.numbersArray.length}
              </h3>
            ) : (
              <h3 className="text-2xl p-4 rounded m-5">
                Total Numbers Found:
                <span className="m-4">{this.state.filtered.length}</span>
              </h3>
            )}

            {this.state.keyword === "" ? (
              <DataDisplay data={this.state.fileData.numbersArray} />
            ) : (
              <DataDisplay data={this.state.filtered} />
            )}

            <div className=" "></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
