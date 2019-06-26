import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state ={
    greeting: ""
  }
  
  render() {
    return (
      <>
      <h1>Hello World</h1>
      <button onClick={this.greet}>Greet</button>
      <div>{this.state.greeting}</div>
      </>
    );
  }
  
  greet= () => {
    this.setState({ greeting: "Hello there world"})
  } 

}

export default App;
