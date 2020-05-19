export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const toggleComplete = id => {
  console.log('toggle action running: ', id);

  return {
    type: TOGGLE_COMPLETE,
    payload: id
  };
};

export const clearCompleted = () => {
  console.log('clear completed running...');

  return {
    type: CLEAR_COMPLETED
  };
};
