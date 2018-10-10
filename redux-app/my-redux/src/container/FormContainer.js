import { connect } from "react-redux";
import FormView from "../view/FormView";
import { increment, decrement } from "../action/ActionMapper";

/**
 * Dummy Method as javascript will not be able to skip first method
 * @param {*} state
 */
function mapStateToProps(state) {
  return {};
}

/**
 * Mapping a action in action mapper.
 * From Action mapper we pass the type based on which the Reducer performs the operation
 * @param {*} dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    increment: () => {
      console.log("FormContainer.mapDispatchToProps.increment:");
      dispatch(increment());
    },
    decrement: () => {
      console.log("FormContainer.mapDispatchToProps.decrement:");
      dispatch(decrement());
    }
  };
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormView);
export default FormContainer;
