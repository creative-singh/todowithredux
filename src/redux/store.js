import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import thunk from "redux-thunk";

const middleware = [thunk];

const todoFromStorage = localStorage.getItem("TODO")
  ? JSON.parse(localStorage.getItem("TODO"))
  : [];

const initialState = {
  todos: todoFromStorage,
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
