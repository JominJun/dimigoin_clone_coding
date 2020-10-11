import React, { Component } from "react";
import { Route } from "react-router-dom";
import {
  Login,
  Ingang,
  Laundry,
  Stay,
  Counsel,
  Afterschool,
  Club,
  Study,
  Dets,
} from "../src/pages";
import "./pages/fonts.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/ingang" component={Ingang} />
        <Route exact path="/laundry" component={Laundry} />
        <Route exact path="/stay" component={Stay} />
        <Route exact path="/counsel" component={Counsel} />
        <Route exact path="/afterschool" component={Afterschool} />
        <Route exact path="/club" component={Club} />
        <Route exact path="/study" component={Study} />
        <Route exact path="/dets" component={Dets} />
      </div>
    );
  }
}

export default App;
