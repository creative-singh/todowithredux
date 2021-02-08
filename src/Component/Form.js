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
      dispatch(addtodo(todo));
      setTodo("");
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
        <button type="submit" className="btn">
          <i className="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
};

export default Form;
