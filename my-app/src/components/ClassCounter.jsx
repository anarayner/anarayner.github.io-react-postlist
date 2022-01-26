import React from "react";

class ClassCounter extends React.Component {
  // we need to create a State, we are creating constructor because we are not able to use hooks here
  // it's takes props as a parameter, then initializing state ()
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    // here everything works same, we are not able to charge State
    this.setState({count: this.state.count +1})
  }

  decrement() {
    this.setState({count: this.state.count -1})
  }

  // here we're creating render function which return jsx (this is the difference from the function component )
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default ClassCounter;
