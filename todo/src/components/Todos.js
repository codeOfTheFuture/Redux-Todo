import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

import '../App.css';

const Todos = props => {
  return (
    <div className="todo-wrapper">
      {props.todosOnProps.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
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
  {}
)(Todos);
