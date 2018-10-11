import React from "react";
import { Link } from "react-router-dom";

class ListDepartment extends React.Component {
  constructor() {
    super();
    this.state = {
      departments: [],
      selectId: 0
    };
    this.selectDepartment = this.selectDepartment.bind(this); // only when it is binded that function change will reflect the state
  }

  componentDidMount() {
    console.log(this);
    this.props.getDepartmentDetails("http://localhost:3004/departments");
  }
  selectDepartment(id) {
    this.setState({ selectId: id });
  }

  render() {
    console.log("Department:", this.props);
    const { userDetails } = this.props;
    console.log("User   ", userDetails);

    const deptListJSX = userDetails.map((element, index) => {
      return (
        <tr>
          <td>{element.id}</td>
          <td>{element.name}</td>
          <td>
            <input
              name="dept"
              type="radio"
              value={element.id}
              data={element}
              selectHandler={this.selectDepartment}
            />
          </td>
        </tr>
      );
    });

    let modifyURL = "";
    if (this.state.selectId === 0) {
      modifyURL = "/department";
    } else {
      modifyURL = `/department/modify?id=${this.state.selectId}`;
    }

    return (
      <section className="content">
        <h1>Departments</h1>
        <form action="">
          <div>
            <Link to="/department/add">
              <input type="button" value="Create" />
            </Link>
            <Link to={modifyURL}>
              <input type="button" value="Update" />
            </Link>
            <input type="button" value="Delete" />
          </div>
          <div>
            <table id="tab">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>

              <tbody>{deptListJSX}</tbody>
            </table>
          </div>
        </form>
      </section>
    );
  }
}

export default ListDepartment;
