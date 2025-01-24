import { useSelector } from "react-redux";
import { v4 } from "uuid";

const TodoList = () => {
  // =============== Redux ===============
  const filteredTodos = useSelector((state) => {
    const { todos } = state;
    const { filter } = state;
    const { searchTerm } = state;
    return todos.filter((todo) => {
      const matchsFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETED" && !todo.completed) ||
        filter === "ALL";
      const matchsSearch = todo.text
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchsFilter && matchsSearch;
    });
  });

  // =============== Rendering ===============
  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {!!filteredTodos.length &&
        filteredTodos.map((todo) => <li key={v4()}>{todo.text}</li>)}
    </ul>
  );
};

export default TodoList;
