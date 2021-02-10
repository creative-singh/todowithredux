import Form from "./Component/Form";
import TodoList from "./Component/TodoList";

const App = () => {
  return (
    <div>
      <div className="headerContainer">
        <h1 className="header">ToDo List</h1>
      </div>
      <Form />
      <TodoList />
    </div>
  );
};

export default App;
