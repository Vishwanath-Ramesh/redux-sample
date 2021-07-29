import React from "react";

import Todos from "../Todos/Todos";

function TodoLists() {
  const [todo, setTodo] = React.useState("");

  return (
    <div className="todo-lists">
      <div className="todo-lists__add-todo">
        <input
          placeholder="Enter Todo"
          type="text"
          value={todo}
          onChange={({ target }) => setTodo(target.value)}
        />
        <button type="submit">Add Todo</button>
      </div>
      <Todos />
    </div>
  );
}

export default TodoLists;
