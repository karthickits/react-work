import React from "react";
import DepartmentList from "./../container/DepartmentContainer";
import AddDepartment from "./../container/AddDeptContainer";
import EmployeeList from "../container/EmployeeContainer";
import Login from ".././component/login/Login";
import Logout from ".././component/logout/Logout";
import Menu from "./Menu";
import Header from "../component/Header";
import { Switch, Route } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <div class="main">
        <Header /> <Menu />
        <section className="content">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/department" exact component={DepartmentList} />
            <Route path="/employee" component={EmployeeList} />
            <Route path="/department/add" component={AddDepartment} />
            <Route
              path="*"
              render={() => {
                return <h3 style={{ color: "red" }}>404 -page not found!</h3>;
              }}
            />
          </Switch>{" "}
        </section>
      </div>
    );
  }
}

export default Main;
