import { connect } from "react-redux";
import Employee from "../component/employee/Employee";

import { getEmployeeDetails } from "../action/ActionInvoker";

function mapStateToProps(state) {
  return {
    fetching: state.fetching,
    userDetails: state.userDetails,
    error: state.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEmployeeDetails: url => {
      console.log("getEmployeeDetails", url);
      dispatch(getEmployeeDetails(url));
    }
  };
}

const EmpContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Employee);

export default EmpContainer;
