import React from "react";
/**
 * View js where the output is getting listened and rendered
 * props val is getting obtained from state through DisplayContainer
 */
class DisplayView extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.val}</li>
      </ul>
    );
  }
}

export default DisplayView;
