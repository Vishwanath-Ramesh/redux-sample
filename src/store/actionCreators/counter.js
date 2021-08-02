import { INCREMENT, DECREMENT } from "../actions/counter";

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}
