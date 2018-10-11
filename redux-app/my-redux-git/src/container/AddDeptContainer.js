import { connect } from "react-redux";
import createDepartment from "../component/department/CreateDepartment";

import { addDepartment } from "../action/ActionInvoker";

function mapStateToProps(state) {
  //dummy function
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    createDepartment: dept => {
      console.log("createDepartment", dept);
      dispatch(addDepartment(dept));
    }
  };
}

const AddDeptContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(createDepartment);

export default AddDeptContainer;
