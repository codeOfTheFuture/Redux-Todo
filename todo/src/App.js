import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">Redux Todo</h1>
        <TodoForm />
        <Todos />
      </div>
    );
  }
}

export default App;
