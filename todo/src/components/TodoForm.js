import React, { Component } from 'react';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

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

const mapStateToProps = state => {
  return {
    todosOnProps: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoForm);
