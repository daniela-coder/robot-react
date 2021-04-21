import React, { Component } from 'react';
import Script from "./script";
import "./App.css";

class App extends Component {

  state = {
    robotStates: []
  }

  render() {
    return (
      <div className="App">
        <Script></Script>
      </div>
      
      )
  }
}

export default App;
