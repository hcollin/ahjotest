import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import {ahjoTest} from 'ahjojs';


class App extends Component {
  render() {
  console.log(ahjoTest(1,2));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to AHJO TEST</h1>
        </header>
        <p className="App-intro">
        
        </p>
      </div>
    );
  }
}

export default App;
