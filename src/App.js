import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      dob: '',
      age: null,
    };
  }

  handleDOBChange = (e) => {
    this.setState({ dob: e.target.value });
  }

  calculateAge = () => {
    const dob = new Date(this.state.dob);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();

    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
      this.setState({ age: age - 1 });
    } else {
      this.setState({ age });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Age Calculator</h1>
        <label htmlFor="dob">Select your Date of Birth:</label><br />
        <input type="date" id="dob" onChange={this.handleDOBChange} /><br />
        <button onClick={this.calculateAge}>Calculate Age</button>
        {this.state.age !== null && (
          <p>You are {this.state.age} years old</p>
        )}
      </div>
    );
  }
}

export default App;
