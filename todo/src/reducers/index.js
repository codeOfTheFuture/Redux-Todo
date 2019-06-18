import { ADD_TODO, TOGGLE_COMPLETE, CLEAR_COMPLETED } from '../actions';

const initialState = {
  todos: [
    {
      id: 1,
      value: 'walk the dog',
      completed: false
    },
    {
      id: 2,
      value: 'cook dinner',
      completed: false
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
      };
    case TOGGLE_COMPLETE:
      return {
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          } else {
            return todo;
          }
        })
      };
    case CLEAR_COMPLETED:
      return {
        todos: state.todos.filter(todo => {
          if (!todo.completed) {
            return todo;
          }
        })
      };
    default:
      return state;
  }
};

export default reducer;
