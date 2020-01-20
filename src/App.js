import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import {
  Home,
  NavBar,
  GameView,
  AllUsers,
  AddUser,
  EditUser,
  SingleUser
} from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename="">
          <NavBar />
          <div className="app-h">
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/games" render={() => <GameView />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
