import React, { Component } from "react";
import CSVReader from "react-csv-reader";
import DataDisplay from './dataDisplay';



  

class FileReader extends Component{

  state = {
data:[]
  };
papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
  };

x = (data, fileInfo) => {
    this.setState({
      data,
      fileInfo
    })
  }


  render(){
    return (
      <div>
        <CSVReader
          onFileLoaded={this.x}
          parserOptions={this.papaparseOptions}
        />
        <p>and then open the console</p>
        <DataDisplay data={this.state.data}/>
      </div>
      
    );
    
  }


}



export default FileReader;


