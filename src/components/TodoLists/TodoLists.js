import React from "react";
import { useDispatch } from "react-redux";

import todoListsActions from "../../store/actionCreators/todoLists";
import Todos from "../Todos/Todos";

function TodoLists() {
  const [todo, setTodo] = React.useState("");
  const dispatch = useDispatch();

  return (
    <div className="todo-lists">
      <div className="todo-lists__add-todo">
        <input
          placeholder="Enter Todo"
          type="text"
          value={todo}
          onChange={({ target }) => setTodo(target.value)}
        />
        <button
          type="submit"
          onClick={() => dispatch(todoListsActions.addTodo(todo))}
        >
          Add Todo
        </button>
      </div>
      <Todos />
    </div>
  );
}

export default TodoLists;
