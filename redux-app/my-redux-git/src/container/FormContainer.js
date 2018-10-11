import { connect } from "react-redux";
import Form from "../view/Form";

import { getUserDetailsAction } from "../action/ActionInvoker";

function mapStateToProps(state) {
  //dummy function
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    getUserDetails: url => {
      console.log("getUserDetails", url);
      dispatch(getUserDetailsAction(url));
    }
  };
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default FormContainer;
