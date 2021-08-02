import { TOGGLE_TODO, UPDATE_TODOS, ADD_TODO } from "../actions/todoLists";

const initialState = [];

export default function todoListsReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) todo.completed = !todo.completed;

        return todo;
      });
    case UPDATE_TODOS:
      return action.payload.todos;
    case ADD_TODO:
      return [action.payload, ...state];

    default:
      return state;
  }
}
