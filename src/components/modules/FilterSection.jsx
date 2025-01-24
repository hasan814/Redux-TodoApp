import { BsSearch } from "react-icons/bs";

const FilterSection = ({ searchHandler, searchTerm }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        id="addSearchInput"
        value={searchTerm}
        name="addToDoInput"
        placeholder="Search"
        onChange={(event) => searchHandler(event.target.value)}
        className="flex-grow p-2 border-b-2 bg-white border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        <BsSearch />
      </button>
    </div>
  );
};

export default FilterSection;
