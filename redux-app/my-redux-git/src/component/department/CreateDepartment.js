import React from "react";
import { Redirect } from "react-router-dom";

class CreateDepartment extends React.Component {
  constructor() {
    super();
    this.addNewDepartment = this.addNewDepartment.bind(this);
  }
  addNewDepartment() {
    this.props.createDepartment(this.deptName.value);
  }
  render() {
    return (
      <div>
        <h1>Add Department</h1>
        <form action="">
          <div className="form-input">
            <label>Name:</label>
            <input
              type="text"
              ref={node => {
                this.deptName = node;
              }} //Uncontrolled way of binding, this property enables it to be accessable through out the class
            />
          </div>

          <div className="form-input">
            <input type="button" value="Add" onClick={this.addNewDepartment} />
            <input type="reset" value="Reset" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateDepartment;
