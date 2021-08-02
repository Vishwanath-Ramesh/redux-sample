import React from "react";
import { useDispatch } from "react-redux";

import todoListsActions from "../../store/actionCreators/todoLists";
import "./Todo.css";

function Todo({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className={`todo ${todo.completed ? "completed" : ""}`}>
      <label onClick={() => dispatch(todoListsActions.toggleTodo(todo.id))}>
        {todo.description}
      </label>
      <button
        type="button"
        onClick={() => dispatch(todoListsActions.deleteTodo(todo.id))}
      >
        X
      </button>
    </div>
  );
}

export default Todo;
