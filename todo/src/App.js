import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux Todo</h1>
        <Todos />
      </div>
    );
  }
}

export default App;
