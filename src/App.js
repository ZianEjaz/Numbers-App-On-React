import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
  render() {
    return (
      <div>
        <Router>
          <div className="min-h-screen flex flex-wrap">
            <Navigation />

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/addend">
                <AddEnd />
              </Route>
              <Route path="/addbefore">
                <AddBefore />
              </Route>
              <Route path="/sortcountry">
                <Sort />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
