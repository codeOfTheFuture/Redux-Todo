import React from 'react';

function Todo(props) {
  console.log(props);
  return (
    <div>
      <h3>{props.todo.value}</h3>
    </div>
  );
}

export default Todo;
