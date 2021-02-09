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


