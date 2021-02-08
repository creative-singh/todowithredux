const todoReducer = (state = { todos: [] }, action) => {
  console.log("---");

  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default todoReducer;
