import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

const Todos = props => {
  return (
    <div>
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
