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

export const markAllComplete = () => ({ type: MARK_ALL_COMPLETED });
export const addTodo = (text) => ({ type: ADD_TODO, payload: text });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: { id } });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: { id } });
export const markComplete = (id) => ({ type: MARK_COMPLETED, payload: { id } });

export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETED,
  payload: { id },
});

export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});
