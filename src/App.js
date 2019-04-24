import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    Persons: [
      {name: 'ankit11', age: '29'}
    ]
  }
  switchNameHandler = () => {
    console.log('button clicked');
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am react</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.Persons[0].name}>Hey bro!</Person>   
      </div>
    )
    // return React.createElement('div', {className: 'App'})
  }
}

export default App;
