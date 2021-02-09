export const addtodo = (todo) => (dispatch, getState) => {
  dispatch({
    type: "ADD_TODO",
    payload: {
      id: Math.random(),
      todo,
    },
  });

  localStorage.setItem(
    "TODO",
    JSON.stringify(getState().todos)
  );
};

export const deleteTodo = (id) => (dispatch, getState) => {
  dispatch({
    type: "DELETE_TODO",
    payload: id,
  });

  localStorage.setItem(
    "TODO",
    JSON.stringify(getState().todos)
  );
};

export const editTodo = (data) => (dispatch, getState) => {
  let newTodo = prompt("Edit Your To Do", data.todo);

  if (newTodo) {
    dispatch({
      type: "EDIT_TODO",
      payload: {
        id: data.id,
        todo: newTodo,
      },
    });
    localStorage.setItem(
      "TODO",
      JSON.stringify(getState().todos)
    );
  } else {
    alert("Got a blank value");
  }
};
