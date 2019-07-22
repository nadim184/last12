import React from "react";
import "./App.css";
import profile from "./profile"
import Contact from "./Contact"
import Home from "./Home";
import { BrowserRouter, Link , Route } from "react-router-dom";
export default class App extends React.Component {
  render() {
    return (
      
      <BrowserRouter>
        <div className="App">
          <div>
          <Route path="/Home" exact component={Home}/>
          <Route path="/profile" exact component={profile}/>
          <Route path="/contact" exact component={Contact}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}