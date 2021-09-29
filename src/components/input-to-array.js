import React, { Component } from "react";

class InputToArray extends Component {
  state = {
    textareaValue: "",
    InputArray: [],
  };
  inputToArray = (event) => {
    let InputArray = this.state.textareaValue.split("\n");
    this.setState({ InputArray });
    console.log(this.state.InputArray);
    event.preventDefault();
  };

  textareaValue = (event) => {
    let InputValue = event.target.value;
    this.setState({
      textareaValue: InputValue,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.inputToArray} className="flex justify-end">
          <textarea
            className="w-full"
            value={this.state.textareaValue}
            onChange={this.textareaValue}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        {this.state.InputArray[0]}
      </>
    );
  }
}

export default InputToArray;
