import React, { Component } from 'react';
import './App.scss';
import Home from './Home';
import PrintResume from './PrintResume';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrintResume />
        {/* <Home /> */}
      </div>
    );
  }
}

export default App;
