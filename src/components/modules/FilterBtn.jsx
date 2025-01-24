import { filterTodos, markAllComplete } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

const FilterBtn = () => {
  // ============= Redux ================
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  // ============= Filter Function ===============
  const filterHandler = (filter) => {
    dispatch(filterTodos(filter));
  };

  // ============= Rendering ===============
  return (
    <div className="flex space-x-4 items-center">
      <select
        value={currentFilter}
        onChange={(event) => filterHandler(event.target.value)}
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETED">Incompleted</option>
      </select>
      <button
        onClick={() => dispatch(markAllComplete())}
        className="capitalize text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded"
      >
        mark all completed
      </button>
    </div>
  );
};

export default FilterBtn;
