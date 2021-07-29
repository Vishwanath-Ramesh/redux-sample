import React from "react";

function Todo({ todo }) {
  return <div className="todo">{todo.name}</div>;
}

export default Todo;
