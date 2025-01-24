import { BsPlus } from "react-icons/bs";

const InputHeader = ({ newTodoText, setNewTodoText, addToDoHandler }) => {
  return (
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
  );
};

InputHeader.propTy;

export default InputHeader;
