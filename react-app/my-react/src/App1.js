import React from "react";
import Form from "././../src/Form";
import Display from "./../src/Display";

class App1 extends React.Component {
  constructor() {
    super();
    this.state = {
      newValue: 10
    };
  }

  increment(param) {
    console.log("inc");
    this.setState(prevState => {
      const val = prevState.newValue + 1;
      return {
        newValue: val
      };
    });
  }

  decrement(param) {
    console.log("dec");
    this.setState(prevState => {
      const val = prevState.newValue - 1;
      return {
        newValue: val
      };
    });
  }

  render() {
    return (
      <div>
        <Form incrHandler={this.increment} decrHandle={this.decrement} />
        <Display />
      </div>
    );
  }
}

export default App1;
