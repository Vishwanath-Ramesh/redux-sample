import React from "react";

import "./counter.css";

function Counter() {
  return (
    <div className="counter">
      <button type="button">+</button>
      <h1>0</h1>
      <button type="button">-</button>
    </div>
  );
}

export default Counter;
