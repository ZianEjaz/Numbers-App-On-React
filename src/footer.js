import React, { Component } from "react";
import DownloadCsv from "./components/downloadCsv";
import { Animated } from "react-animated-css";

class Footer extends Component {


  state = {
    numbersArray: this.props.data ,
    account: '',
    label: '',
    startingNumber: '',
    error: false
  }

  updateNumber = (event) => {
    this.setState({
      startingNumber: event.target.value
    })
  }
  updateAccount = (event) => {
    this.setState({
      account: event.target.value
    })
  }
  updateLabel = (event) => {
    this.setState({
      label: event.target.value
    })
  }



  render() {
    return (
      <div className="flex justify-center bg-gray-950 text-white w-full">

        <Animated animationIn="animate__zoomIn" animationOut="animate__zoomOut" isVisible={true}>
          <footer className="">
            <div className="flex flex-wrap text-white p-2 md:p-8 rounded-2xl mt-8 w-screen md:w-2/3 mx-auto mt-8 relative shadow-3xl bg-grey-950">
              <div className="flex-wrap w-1/2 p-5">
                <label className="">First contact starting number</label>
                <input
                  onChange={this.updateNumber}
                  className="w-full p-3 placeholder-gray-500 text-gray-900 rounded-xl sm:text-sm"
                  name="name"
                  type="number"
                ></input>
              </div>
              <div className="flex-wrap w-1/2 p-5">
                <label>Label</label>
                <input
                  onChange={this.updateLabel}
                  className="w-full p-3 placeholder-gray-500 text-gray-900 rounded-xl sm:text-sm"
                  name="name"
                ></input>
              </div>
            
              <div className="flex-wrap w-1/2 p-5">
                <label>Account</label>
                <input
                  onChange={this.updateAccount}
                  className="w-full p-3 placeholder-gray-500 text-gray-900 rounded-xl sm:text-sm"
                  name="name"
                ></input>
              </div>
              <div className="flex flex-wrap p-5 w-1/2 justify-end">
                <p>no of contacts processed = {this.state.numbersArray.length}</p>
                <button type="submit">

                  < DownloadCsv state={this.state} />
                </button>

              </div>
            </div>
          </footer>
        </ Animated >

      </div>
    );
  }
};

export default Footer;
