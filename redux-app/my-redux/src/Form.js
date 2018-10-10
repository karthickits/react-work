import React from "react";
import { connect } from "react-redux";

class Form extends React.Component {
  constructor() {
    super();
    this.incrHandler = this.incrHandler.bind(this);
    this.decrHandler = this.decrHandler.bind(this);
  }
  incrHandler() {
    this.props.dispatch({ type: "INCREMENT" });
  }
  decrHandler() {
    this.props.dispatch({ type: "DECREMENT" });
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

function mapStateToProps(state) {
  return {
    val: state.count
  };
}
const FormContainer = connect(mapStateToProps)(Form);

export default FormContainer;
