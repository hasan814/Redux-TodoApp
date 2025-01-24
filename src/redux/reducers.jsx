import Cookies from "js-cookie";

import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  FILTER_TODOS,
  MARK_COMPLETED,
  MARK_INCOMPLETED,
  UPDATE_SEARCH_TERM,
  MARK_ALL_COMPLETED,
} from "./actionTypes";

// ============ Initialize State ===============
const initialState = {
  todos: Cookies.get("todos") ? JSON.parse(Cookies.get("todos")) : [],
  filter: "ALL",
  searchTerm: "",
};

// =========== Save Todos to Cookies ==============
const saveTodosToCookies = (todos) => {
  Cookies.set("todos", JSON.stringify(todos), { expires: 7, path: "/" });
};

// =========== Reducer ==============
const todoReducer = (state = initialState, action) => {
  let updatedState;

  switch (action.type) {
    case ADD_TODO:
      updatedState = {
        ...state,
        todos: [...state.todos, { text: action.payload, completed: false }],
      };
      break;
    case TOGGLE_TODO:
      updatedState = {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
      break;
    case REMOVE_TODO:
      updatedState = {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload.id),
      };
      break;
    case MARK_COMPLETED:
      updatedState = {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
      };
      break;
    case MARK_INCOMPLETED:
      updatedState = {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
      };
      break;
    case FILTER_TODOS:
      updatedState = {
        ...state,
        filter: action.payload.filter,
      };
      break;
    case UPDATE_SEARCH_TERM:
      updatedState = {
        ...state,
        searchTerm: action.payload.searchTerm,
      };
      break;
    case MARK_ALL_COMPLETED:
      updatedState = {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
      };
      break;
    default:
      return state;
  }

  // ========== Save updated todos to cookies ===========
  saveTodosToCookies(updatedState.todos);

  return updatedState;
};

export default todoReducer;
