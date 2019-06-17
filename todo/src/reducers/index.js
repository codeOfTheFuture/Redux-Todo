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

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
