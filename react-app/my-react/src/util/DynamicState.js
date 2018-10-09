import React from "react";
class DynamicState extends React.Component {
  constructor() {
    super();
    this.state = {
      newValue: 1
    };

    // binding current object to the event. !important and added here to avoid to binding everytime on onclick
    // can be added in the onclick event as well
    //this.increaseCount = this.increaseCount.bind(this);
    // this.decreseCount = this.decreseCount.bind(this);
  }

  increaseCount() {
    console.log("incrementing...", this);
    const incValue = this.state.newValue + 1;

    this.setState({ newValue: incValue });
  }

  decreseCount() {
    console.log("decrementing...", this);
    const decValue = this.state.newValue - 1;
    this.setState({ newValue: decValue });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="button"
            value="Increment"
            onClick={this.increaseCount.bind(this)}
          />
          &nbsp;&nbsp;&nbsp;
          <input
            type="button"
            value="Decrement"
            onClick={this.decreseCount.bind(this)}
          />
          &nbsp;&nbsp;&nbsp;
          {this.state.newValue}
        </form>
      </div>
    );
  }
}

export default DynamicState;
