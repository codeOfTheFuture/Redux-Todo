import React from 'react';
import { connect } from 'react-redux';
import { toggleComplete } from '../actions';

import '../App.css';

const Todo = props => {
  const toggleComplete = (e, id) => {
    e.preventDefault();
    console.log('Toggled...');
    props.toggleComplete(id);
  };

  return (
    <div
      onClick={e => toggleComplete(e, props.todo.id)}
      className={props.todo.completed ? 'todo todo-completed' : 'todo'}
    >
      <h3 className="todo-name">{props.todo.value}</h3>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todosOnProps: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleComplete }
)(Todo);
