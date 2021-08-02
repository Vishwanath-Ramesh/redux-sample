import React from "react";
import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";

function Todos() {
  const todos = useSelector((state) => state.todoLists);

  return (
    <div className="todos">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default Todos;
