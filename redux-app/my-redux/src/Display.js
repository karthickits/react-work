import React from "react";
import { connect } from "react-redux";
class Display extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.val}</li>
      </ul>
    );
  }
}
Display.defaultProps = {
  val: 0
};

function mapStateToProps(state) {
  return {
    val: state.count
  };
}

const DisplayContainer = connect(mapStateToProps)(Display);

export default DisplayContainer;
