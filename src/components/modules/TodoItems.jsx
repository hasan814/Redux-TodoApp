import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

import {
  FaTrash,
  FaCheck,
  FaTimes,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";

import {
  toggleTodo,
  removeTodo,
  markComplete,
  markIncomplete,
} from "../../redux/action";

const TodoItems = ({ todo, index }) => {
  // ============== Destructures ============
  const { completed, text } = todo;

  // ============== Redux ============
  const dispatch = useDispatch();

  // ============== Rendering ============
  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="">
        <span className="mr-4 text-gray-500">{index + 1}</span>
        <span
          className={`mr-4 ${completed ? "line-through text-red-500" : ""}`}
        >
          {text}
        </span>
      </div>
      <div className="space-x-3 ml-8">
        <button
          onClick={() => dispatch(toggleTodo(index))}
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
        >
          {completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button
          onClick={() => dispatch(removeTodo(index))}
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 py-1 px-1 rounded"
        >
          <FaTrash />
        </button>
        {!completed && (
          <button
            onClick={() => dispatch(markComplete(index))}
            className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"
          >
            <FaCheck />
          </button>
        )}
        {completed && (
          <button
            onClick={() => dispatch(markIncomplete(index))}
            className="mr-2 text-sm bg-yellow-500 text-white sm:px-2 py-1 px-1 rounded"
          >
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

TodoItems.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default TodoItems;
