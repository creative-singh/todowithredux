const todoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      const data = state.todos.filter(
        (todo) => todo.id !== action.payload
      );

        return {
        ...state,
        todos: state.todos.filter(
          (todo) => todo.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
