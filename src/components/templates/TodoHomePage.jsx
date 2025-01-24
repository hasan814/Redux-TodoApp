import { useDispatch } from "react-redux";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";

const TodoHomePage = () => {
  // =============== Dispatch ===============
  const dispatch = useDispatch();

  // =============== State ===============
  const [newTodoText, setNewTodoText] = useState("");

  // =============== Handle Function ===============
  const addToDoHandler = () => {
    if (newTodoText.trim() !== "") {
      dispatch(newTodoText.trim());
      setNewTodoText("");
    }
  };

  // =============== Rendering ===============
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="uppercase mt-3 mb-6 text-2xl font-bold text-center">
        personal todo apper
      </h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          id="addTodoInput"
          name="addTodoInput"
          value={newTodoText}
          placeholder="Add Todo"
          onChange={(event) => setNewTodoText(event.target.value)}
          className="flex-grow border-gray-300 p-2 border-b-2 bg-white focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={addToDoHandler}
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <BsPlus />
        </button>
      </div>
    </div>
  );
};

export default TodoHomePage;
