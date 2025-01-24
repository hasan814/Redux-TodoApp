import { addTodo, updateSearchTerm } from "../../redux/action";
import { useDispatch } from "react-redux";
import { useState } from "react";

import InputHeader from "../modules/InputHeader";
import FilterSection from "../modules/FilterSection";

const TodoHomePage = () => {
  // =============== Dispatch ===============
  const dispatch = useDispatch();

  // =============== State ===============
  const [newTodoText, setNewTodoText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // =============== Add Function ===============
  const addToDoHandler = () => {
    if (newTodoText.trim() !== "") {
      dispatch(addTodo(newTodoText.trim()));
      setNewTodoText("");
    }
  };

  // =============== Search Function ===============
  const searchHandler = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  // =============== Rendering ===============
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="uppercase mt-3 mb-6 text-2xl font-bold text-center">
        personal todo apper
      </h2>
      <InputHeader
        newTodoText={newTodoText}
        setNewTodoText={setNewTodoText}
        addToDoHandler={addToDoHandler}
      />
      <FilterSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchHandler={searchHandler}
      />
    </div>
  );
};

export default TodoHomePage;
