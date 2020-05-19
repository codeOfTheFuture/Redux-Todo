import React, { Component } from 'react';
import { addTodo, clearCompleted } from '../actions';
import { connect } from 'react-redux';

import '../App.css';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 3,
      value: '',
      completed: false
    };
  }

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState(prevState => {
      return {
        ...prevState,
        value: '',
        id: prevState.id + 1
      };
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.props.clearCompleted();
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo} className="form">
          <div className="form-group">
            <label className="form-label">Add Todo</label>
            <input
              className="form-input"
              type="text"
              placeholder="Add Todo"
              name="value"
              value={this.state.value}
              onChange={this.onInputChange}
            />
          </div>
          <div>
            <button className="btn add-todo">Add Todo</button>
            <button
              className="btn clear-completed"
              onClick={e => this.clearCompleted(e)}
            >
              Clear Completed
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todosOnProps: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, clearCompleted }
)(TodoForm);
