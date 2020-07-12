import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../store/Actions';

export class Counter extends Component {
  render() {
    return (
      <div className='Counter'>
        <h2>Counter</h2>
        <div>
          <button id='Btn_Decrement' onClick={this.props.decrement}>
            -
          </button>
          <span>{this.props.counter}</span>
          <button id='Btn_Increment' onClick={this.props.increment}>
            +
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = {
  increment: increment,
  decrement: decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
