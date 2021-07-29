import React from "react";

import Counter from "./components/Counter/Counter";
import TodoLists from "./components/TodoLists/TodoLists";

function App() {
  return (
    <div className="App">
      <TodoLists />
      <Counter />
    </div>
  );
}

export default App;
