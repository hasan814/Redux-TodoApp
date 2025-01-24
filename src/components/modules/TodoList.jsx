import { useSelector } from "react-redux";
import { v4 } from "uuid";
import TodoItems from "./TodoItems";

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
        filteredTodos.map((todo, index) => (
          <TodoItems key={index} todo={todo} index={index} />
        ))}
    </ul>
  );
};

export default TodoList;
