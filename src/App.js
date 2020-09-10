import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import NoteList from "./NoteList.js";

class App extends Component{
  render(){
    return(
      <div className="App">
        <NoteList />
      </div>
    );
  }
}

export default hot(module)(App);
