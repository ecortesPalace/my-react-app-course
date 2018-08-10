import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 25},
      { name: 'Stephanie', age: 18},
      { name: 'Angel', age: 28}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (new_name) => {
    //console.log('Was clicked!');
    this.setState({
      persons: [
        { name: new_name, age:28 },
        { name: 'Manu', age:25 },
        { name: 'Stephanie', age:18 },
        { name: 'Angel', age:28 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.switchNameHandler.bind(this,'Maximilian')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this,'Max!')}>My Hobbies: Run and Play Pubg</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}>My Hobbies: Run and Play Pubg</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>My Hobbies: Run and Play Pubg</Person>
        <Person 
          name={this.state.persons[3].name} 
          age={this.state.persons[3].age}>My Hobbies: Run and Play Pubg</Person>
      </div>
    );
  }
}

export default App;
