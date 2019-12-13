import React from 'react';
import {connect} from "react-redux"
import {increment, decrement} from "../../store/Counter/Counter.store";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    const {increment, decrement, count} = this.props;

    return (
      <div>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

export default connect( 
  mapStateToProps,
  mapDispatchToProps
)(Counter)