import React from 'react';
import { connect } from 'react-redux';
import { toggleComplete } from '../actions';

const Todo = props => {
  const toggleComplete = (e, id) => {
    e.preventDefault();
    console.log('Toggled...');
    props.toggleComplete(id);
  };

  return (
    <div onClick={e => toggleComplete(e, props.todo.id)}>
      <h3
        style={
          props.todo.completed
            ? { textDecoration: 'line-through', backgroundColor: 'lightgrey' }
            : { textDecoration: 'none' }
        }
      >
        {props.todo.value}
      </h3>
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
