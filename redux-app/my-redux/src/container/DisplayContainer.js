import { connect } from "react-redux";
import DisplayView from "../view/DisplayView";

/**
 * Mapping state's value to val.
 * From DisplayContainer the val is passed to DisplayView so that it is getting rendered
 * @param {} state
 */
function mapStateToProps(state) {
  return {
    val: state.count
  };
}

const DisplayContainer = connect(mapStateToProps)(DisplayView);

export default DisplayContainer;
