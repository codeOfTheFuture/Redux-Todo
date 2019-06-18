import { ADD_TODO } from '../actions';

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
      console.log('ran...');
      return {
        todos: [...state.todos, action.payload]
      };
    default:
      console.log('ran...');
      return state;
  }
};

export default reducer;
