const initialState = {
  todos: [
    {
      value: 'walk the dog',
      completed: false
    },
    {
      value: 'cook dinner',
      completed: false
    }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
