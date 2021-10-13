import React, { Component } from "react";
import CSVReader from "react-csv-reader";
import DataDisplay from "./dataDisplay";
import Search from "./search";



class FileReader extends Component {
  state = {
    fileReadSucessfully : false,
    numbersArray: [],
    fileInfo: "",
    filtered: [],
    keyword: "",
    data: []
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
      fileReadSucessfully : true,
      numbersArray,
      fileInfo,
      data
    });
    this.props.passDataToHome(numbersArray);
  };

  searchNumbers = (event) => {
    let keyword = event.target.value;
    let filtered = this.state.numbersArray.filter((item) => {
      return item.toString().indexOf(keyword) > -1;
    });
    this.setState({
      filtered,
      keyword,
    });
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
              cssClass="csv-reader-parent-class w-full text-center mt-6 flex flex-col jus items-center bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150"
              cssInputClass="hidden"
              label = "Select file"
            />
            <div>
              {this.state.fileReadSucessfully === true ? <p>File Sucessfully Uploaded</p> : <></>}
            </div>
          </div>
        </div>
        <div className="text-white bg-purple-700 p-8 rounded-2xl mt-8 w-full lg:w-2/3 m-auto relative animate__bounceInDown">

        

          <h3 className="text-2xl">File Name: {this.state.fileInfo.name}</h3>
          <h3>File Type: {this.state.fileInfo.type}</h3>

          {this.state.keyword === "" ? (
            <h3>Total Numbers Imported {this.state.numbersArray.length}</h3>
          ) : (
            <h3  className="text-2xl p-4 rounded m-5">
              Total Numbers Found:
              <span className="m-4">{this.state.filtered.length}</span>
            </h3>
          )}
           
          {this.state.keyword === "" ? (
            <DataDisplay data={this.state.numbersArray} />
          ) : (
            <DataDisplay data={this.state.filtered} />
          )}

          <div className=" "></div>
        </div>
      </div>
    );
  }
}

export default FileReader;
