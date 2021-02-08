import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
          textAlign: "center",
        }}>
        {console.log(todos)}
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
