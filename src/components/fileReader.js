import React, { Component } from "react";
import CSVReader from "react-csv-reader";

class FileReader extends Component {
  state = {
    fileData: {
      fileReadSucessfully: false,
      fileInfo: {},
      data: [],
      numbersArray: [],
    },
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
      fileData:{
      fileReadSucessfully: true,
      numbersArray,
      fileInfo,
      data,
      }
    });
    this.props.passFileDataToHomeState(this.state.fileData);
  };

  render() {
    return (
      <>
        <CSVReader
          onFileLoaded={this.readFiletoState}
          parserOptions={this.papaparseOptions}
          cssClass="csv-reader-parent-class w-full text-center mt-6 flex flex-col jus items-center bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-purple-600 hover:text-white text-purple-600 ease-linear transition-all duration-150"
          cssInputClass="hidden"
          label="Select file"
        />
        <div>
              {this.state.fileReadSucessfully === true ? <p>File Sucessfully Uploaded</p> : <></>}
            </div>
      </>
    );
  }
}

export default FileReader;
