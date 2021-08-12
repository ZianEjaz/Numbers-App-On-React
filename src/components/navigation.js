import React from "react";
import {BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Home from "./home";
import Sort from "./sort";
import AddBefore from "./addbefore";
import AddEnd from "./addend";




const Navigation = ()=>{
    return(
<div>
<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sortcountry">Sort Country Wise</Link>
            </li>
            <li>
              <Link to="/addbefore">Add something Before</Link>
            </li>
            <li>
              <Link to="/addend">Add somwthing at end</Link>
            </li>
          </ul>
        </nav>

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
)
}

export default Navigation;