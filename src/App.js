import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Sort from "./components/sort";
import AddBefore from "./components/addbefore";
import AddEnd from "./components/addend";
import Navigation from './components/navigation';

const App = () => {

  return (
    <div>
      <Router>
        <div>
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
        </div>
      </Router>
    </div>
  );
};

export default App;
