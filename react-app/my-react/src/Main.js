import React from "react";
import DepartmentList from "./components/department/Department";
import EmployeeList from "./components/employee/Employee";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import Menu from "./Menu";
import Header from "./components/Header";
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
            <Route path="/department" component={DepartmentList} />
            <Route path="/employee" component={EmployeeList} />
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
