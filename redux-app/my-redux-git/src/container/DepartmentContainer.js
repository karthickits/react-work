import { connect } from "react-redux";
import Department from "../component/department/ListDepartment";

import { getDepartmentDetails } from "../action/ActionInvoker";

function mapStateToProps(state) {
  return {
    fetching: state.fetching,
    userDetails: state.userDetails,
    error: state.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDepartmentDetails: url => {
      console.log("getDepartmentDetails", url);
      dispatch(getDepartmentDetails(url));
    }
  };
}

const DeptContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Department);

export default DeptContainer;
