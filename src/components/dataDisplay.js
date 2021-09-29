import React, { Component } from "react";

class DataDisplay extends Component {
  state = {};

  render() {
    return (
      <div ><br/>
        <h3>Total Numbers Imported {this.props.data.numbersArray.length}</h3><br/>
        <p style={{ whiteSpace: "pre-line" }}>
          {this.props.data.numbersString}
        </p>
      </div>
    );
  }
}

export default DataDisplay;
