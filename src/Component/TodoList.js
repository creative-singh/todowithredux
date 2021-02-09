import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../redux/action";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <div>
      <ul
        style={{
          listStyle: "none",
        }}>
        {todos.map((data) => (
          <li key={data.id} className="todoItem">
            <div>{data.todo}</div>
            <div style={{ textAlign: "right" }}>
              <button
                id="edit"
                type="submit"
                className="editBtn"
                // onClick={() => dispatch(editTodo(data.id))}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                id="dlt"
                type="submit"
                className="dltBtn"
                onClick={() =>
                  dispatch(deleteTodo(data.id))
                }>
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
