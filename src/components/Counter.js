import React, { Component } from 'react';

export class Counter extends Component {
  state = {
    counter: 0,
  };

  onDecrementHandler = () => {
    this.setState((state) => {
      return { counter: state.counter - 1 };
    });
  };

  onIncrementHandler = () => {
    this.setState((state) => {
      return { counter: state.counter + 1 };
    });
  };

  render() {
    return (
      <div>
        <button id='Btn_Decrement' onClick={this.onDecrementHandler}>
          -
        </button>
        <span>{this.state.counter}</span>
        <button id='Btn_Increment' onClick={this.onIncrementHandler}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
