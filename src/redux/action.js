export const addtodo = (todo) => (dispatch, getState) => {
  console.log("--");
  dispatch({
    type: "ADD_TODO",
    payload: todo,
  });

  localStorage.setItem(
    "TODO",
    JSON.stringify(getState().todos)
  );
};
