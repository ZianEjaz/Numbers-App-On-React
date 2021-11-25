import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";


import Home from "./components/home";
import Sort from "./components/sort";
import AddBefore from "./components/addbefore";
import AddEnd from "./components/addend";
import Navigation from "./components/navigation";
import Footer from "./footer.js";

library.add(fab, far, fas);

class App extends Component {
  state = {
    globalState :{
      dataArray : []
    }
  };

  globalStateDataImport = (data) => {
    this.setState({
      globalState :{
        dataArray : data
      }
    });
  };

  updateDataToGlobalState = (data) =>{
    this.setState({
      globalState :{
        dataArray : data
      }
    });
  }

  render() {
    return (
      <div className="bg-gray-950" >
        <Router>
          <div className="min-h-screen flex flex-wrap">
            <Navigation />

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Routes>
            
              <Route path="/addend" element={ <AddEnd data={this.state.globalState.dataArray} updateDataToGlobalState={this.updateDataToGlobalState} />} />
                
               

              <Route path="/addbefore" element={<AddBefore data={this.state.globalState.dataArray} updateDataToGlobalState={this.updateDataToGlobalState} />} />
                

              <Route path="/sortcountry" element={<Sort data={this.state.globalState.dataArray} updateDataToGlobalState={this.updateDataToGlobalState} />} />
                

              <Route path="/" element={<Home globalStateDataImport={this.globalStateDataImport} />} />
                

              
            </Routes>
            
          </div>
        </Router>
        <Footer data={this.state.globalState.dataArray}/>
      </div>
    );
  }
}

export default App;
