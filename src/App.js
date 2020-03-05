import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./page/home";
import HomeUser from "./page/homeUser";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/user/home" component={HomeUser} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
