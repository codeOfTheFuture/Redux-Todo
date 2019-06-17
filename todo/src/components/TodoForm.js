import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <div>
            <label>Add Todo</label>
            <input
              type="text"
              placeholder="Add Todo"
              name="value"
              value={this.state.value}
              onChange={this.onInputChange}
            />
          </div>
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
