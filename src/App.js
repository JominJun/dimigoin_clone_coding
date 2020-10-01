import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Login, Main } from "../src/pages";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/main" component={Main} />
      </div>
    );
  }
}

export default App;
