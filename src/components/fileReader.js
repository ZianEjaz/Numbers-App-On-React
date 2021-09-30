import React, { Component } from "react";
import CSVReader from "react-csv-reader";
import DataDisplay from "./dataDisplay";
import Search from "./search";
import ReadArraytoHtml from "./readArraytoHtml";

class FileReader extends Component {
  state = {
    numbersArray: [],
    numbersString: [],
    fileInfo: "",
    filtered: [],
  };

  papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
  };

  readFiletoState = (data, fileInfo) => {
    const numbersArray = [];
    data.map((data) => {
      return numbersArray.push(data.numbers);
    });
    this.setState({
      numbersArray,
      fileInfo,
      numbersString: numbersArray.join("\n"),
    });
  };

  numArraytoString = this.setState({
    numbersString: this.state.numbersArray.join("\n"),
  });

  searchNumbers = (event) => {
    let keyword = event.target.value;
    let filtered = this.state.numbersArray.filter((item) => {
      return item.toString().indexOf(keyword) > -1;
    });
    this.setState({ filtered });
  };

  render() {
    return (
      <div className="flex flex-wrap justify-center">
        <div className="flex flex-wrap text-white text-xl w-full lg:w-1/4 content-start">
          <div className="p-5 mt-8 bg-purple-600 rounded-2xl w-full">
            <Search searchNumbers={this.searchNumbers} />
          </div>
          <div className="p-5 mt-8 bg-purple-600 rounded-2xl w-full">
            <p>Upload a CSV file to import Contacts</p>
            <CSVReader
              onFileLoaded={this.readFiletoState}
              parserOptions={this.papaparseOptions}
              cssClass="w-full p-5"
            />
          </div>
        </div>
        <div className="text-white bg-gray-700 p-8 rounded-2xl mt-8 w-full lg:w-2/3 m-auto">
          <h3 className="text-2xl">File Name: {this.state.fileInfo.name}</h3>
          <h3>File Type: {this.state.fileInfo.type}</h3>
          <h3>Total Numbers Imported {this.state.numbersArray.length}</h3>
          <div className=" ">
            {this.state.filtered.length === 0 ? (
              <DataDisplay data={this.state.numbersString} />
            ) : (
              <DataDisplay data={this.state.filtered} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default FileReader;
