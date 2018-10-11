import React from "react";
import { Switch, Route } from "react-router-dom";

import ShowDepartments from "./ShowDepartments";
import AddDepartment from "./AddDepartment";
import ModifyDepartment from "./ModifyDepartment";

class DepartmentList extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/department" component={ShowDepartments} />
          <Route path="/department/add" component={AddDepartment} />
          <Route path="/department/modify" component={ModifyDepartment} />
        </Switch>
      </div>
    );
  }
}

export default DepartmentList;
