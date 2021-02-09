import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../redux/action";

const Form = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setTodo(e.target.value);
    console.log(todo);
  };

  const submitHandler = (e) => {
    try {
      e.preventDefault();
      if (todo) {
        dispatch(addtodo(todo));
        setTodo("");
      } else {
        alert("Please Enter any Todo");
      }
    } catch (err) {
      console.log("ERROR =>", err);
    }
  };

  return (
    <div
      style={{ paddingTop: "25px", textAlign: "center" }}>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="todoContent"
          value={todo}
          onChange={inputHandler}
          autoComplete="off"
          className="txtBox"
          placeholder="Enter ToDo"
        />
        <button id="submit" type="submit" className="btn">
          <i className="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default Form;
