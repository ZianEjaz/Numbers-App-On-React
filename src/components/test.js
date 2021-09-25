import React, { Component } from "react";

class Test extends Component {
  state = {};

  render() {
    return (
      <div>
        pass
        <h3>Total Numbers Imported {this.props.data.numbersArray.length}</h3>
        <p style={{ whiteSpace: "pre-line" }}>
          {this.props.data.numbersString}
        </p>
        {console.log(this.props.data.numbersString)}
      </div>
    );
  }
}

export default Test;
