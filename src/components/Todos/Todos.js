import React from "react";

import Todo from "../Todo/Todo";

function Todos() {
  return (
    <div className="todos">
      <Todo todo={{ name: "test" }} />
    </div>
  );
}

export default Todos;
