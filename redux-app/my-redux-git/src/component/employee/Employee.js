import React from "react";
class Employee extends React.Component {
  componentDidMount() {
    console.log(this);
    this.props.getEmployeeDetails("http://localhost:3004/employees");
  }
  render() {
    console.log("Department:", this.props);
    const { userDetails } = this.props;
    console.log("User   ", userDetails);

    const empListJSX = userDetails.map((element, index) => {
      return (
        <tr>
          <td>{element.id}</td>
          <td>{element.name}</td>
          <td>{element.email}</td>
          <td>{element.phone}</td>
          <td>{element.department}</td>
          <td>
            <input name="emp" type="radio" value={element.id} />
          </td>
        </tr>
      );
    });
    return (
      <section className="content">
        <h1>Employee</h1>
        <form action="">
          <div>
            <input type="button" value="Create" />
            <input type="button" value="Update" />
            <input type="button" value="Delete" />
          </div>
          <div>
            <table id="tab">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Department</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>

              <tbody>{empListJSX}</tbody>
            </table>
          </div>
        </form>
      </section>
    );
  }
}

export default Employee;
