import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am react</h1>
        <p>This is really working</p>
        <Person name="ankit"/>   
      </div>
    )
    // return React.createElement('div', {className: 'App'})
  }
}

export default App;
