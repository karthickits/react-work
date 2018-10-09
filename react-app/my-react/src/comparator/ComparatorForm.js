import React from "react";
class ComparatorForm extends React.Component {
  constructor() {
    super();
    this.state = {
      gitBranch: "feature/configserver",
      ms: "",
      compFrom: "",
      compTo: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.textChanged = this.textChanged.bind(this);
  }

  handleFormSubmit() {
    const submitValues = {
      gitBranch: this.state.textVal,
      microservice: this.state.textVal
    };
    console.log(submitValues);
  }

  textChanged(eventObj) {
    //const formTextValues = {};
    //console.log(formTextValues);

    if (eventObj.target.id === "gitBranchId") {
      this.setState({
        gitBranch: eventObj.target.value
      });
    } else {
      console.log("Other events Obtained: ", eventObj);
    }
  }

  selectionMade(eventObj) {}

  render() {
    return (
      <form className="container">
        <label name="gitBranch">Git Branch</label>
        <input
          type="text"
          id="gitBranchId"
          name="gitBranch"
          value={this.state.textVal}
          onChange={this.textChanged}
        />
        <br />
        <label name="microservice">Microservice</label>
        <input
          id="msId"
          type="text"
          name="ms"
          value={this.state.textVal}
          onChange={this.textChanged}
        />
        <br />
        <label name="compareFrom">Compare From</label>
        <select onChange={this.selectEnv}>
          <option value="t4">t4</option>
          <option value="aws_e">AWS-EAST</option>
          <option value="aws_w">AWS-WEST</option>
        </select>
        <br />
        <label name="comapareTo">Compare To</label>
        <select>
          <option value="t4">t4</option>
          <option value="aws_e">AWS-EAST</option>
          <option value="aws_w">AWS-WEST</option>
        </select>
        <br />
        <input type="button" value="compare!" onClick={this.handleFormSubmit} />
      </form>
    );
  }
}

export default ComparatorForm;
