import React, { Component } from "react";
import CSVReader from "react-csv-reader";
import DataDisplay from "./dataDisplay";

class FileReader extends Component {
  state = {
    numbersArray: [],
    numbersString: "abc",
    fileInfo: "",
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

  render() {
    return (
      <div>
        <CSVReader
          onFileLoaded={this.readFiletoState}
          parserOptions={this.papaparseOptions}
        />
        <h3>
          File Name:{" "}
          <span style={{ color: "red" }}>{this.state.fileInfo.name}</span>{" "}
        </h3>
        <h3>
          File Type:{" "}
          <span style={{ color: "red" }}>{this.state.fileInfo.type}</span>{" "}
        </h3>

        <DataDisplay data={this.state} />
      </div>
    );
  }
}

export default FileReader;
