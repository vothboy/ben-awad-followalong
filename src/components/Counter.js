import React from "react";

export default class Counter extends React.Component {
  componentWillUnmount() {
    console.log("unmounting...");
  }

  componentDidMount() {
    console.log("mounting...");
  }

  render() {
    return (
      <div>
        <div>count: {this.props.count}</div>
        <button onClick={this.props.increment}>increment</button>
        <button onClick={this.props.decrement}>decrement</button>
      </div>
    );
  }
}
