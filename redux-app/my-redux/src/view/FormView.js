import React from "react";

class FormView extends React.Component {
  constructor() {
    super();
    this.incrHandler = this.incrHandler.bind(this);
    this.decrHandler = this.decrHandler.bind(this);
  }
  incrHandler() {
    console.log("inc");
    this.props.increment();
  }
  decrHandler() {
    console.log("dec");
    this.props.decrement();
  }
  render() {
    return (
      <form>
        <input type="button" value="increment" onClick={this.incrHandler} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="button" value="decrement" onClick={this.decrHandler} />
      </form>
    );
  }
}
export default FormView;
