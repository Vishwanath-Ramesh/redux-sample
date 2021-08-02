import { DELETE_TODO, TOGGLE_TODO, SAVE_TODO } from "../actions/todoLists";

function addTodo(description) {
  return {
    type: SAVE_TODO,
    payload: { description },
  };
}

function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: { id },
  };
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: {
      id,
    },
  };
}

export default {
  addTodo,
  deleteTodo,
  toggleTodo,
};
