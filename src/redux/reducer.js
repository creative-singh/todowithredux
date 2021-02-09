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
    case "EDIT_TODO":
      const todoIndex = state.todos.findIndex(
        (updateTodo) => updateTodo.id === action.payload.id
      );
      state.todos[todoIndex].todo = action.payload.todo;
      return {
        ...state,
        todos: [...state.todos],
      };
    default:
      return state;
  }
};

export default todoReducer;
