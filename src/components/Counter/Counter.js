import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement } from "../../store/actionCreators/counter";
import "./counter.css";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <button type="button" onClick={() => dispatch(increment())}>
        +
      </button>
      <h1>{counter.count}</h1>
      <button type="button" onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
}

export default Counter;
