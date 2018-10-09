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
  }

  handleFormSubmit() {
    const submitValues = {
      gitBranch: this.state.textVal,
      microservice: this.state.textVal
    };
    console.log(submitValues);
  }

  textChanged() {
    const formTextValues = {
        gitBranch: this.state.textVal,
        microservice: this.state.textVal
      };
      console.log(submitValues);
    }
  }

  render() {
    return (
      <form className="container">
        <label name="gitBranch">Git Branch</label>
        <input
          type="text"
          name="gitBranch"
          value={this.state.textVal}
          onChange={this.textChanged}
        />
        <br />
        <label name="microservice">Microservice</label>
        <input type="text" name="ms" />
        <br />
        <label name="gitBranch">Compare From</label>
        <input type="text" name="compareFrom" />
        <br />
        <label name="gitBranch">Compare To</label>
        <input type="text" name="comapareTo" />
        <br />
        <input type="button" value="compare!" onClick={this.handleFormSubmit} />
      </form>
    );
  }
}

export default ComparatorForm;
