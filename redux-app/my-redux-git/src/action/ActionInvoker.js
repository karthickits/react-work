import axios from "axios";

export function getUserDetailsAction(url) {
  return function(dispatch) {
    dispatch({ type: "IS_FETCHING" });
    axios
      .get(url)
      .then(response => {
        dispatch({ type: "FETCH_SUCCESS", userDetails: response.data });
      })
      .catch(error => {
        dispatch({ type: "FETCH_ERROR", error: error.message });
      });
  };
}

export function getDepartmentDetails(url) {
  console.log(url);
  return function(dispatch) {
    dispatch({ type: "DPT_FETCHING" });
    axios
      .get(url)
      .then(response => {
        dispatch({ type: "DPT_FTCH_SUCCESS", userDetails: response.data });
      })
      .catch(error => {
        dispatch({ type: "DPT_FTCH_ERROR", error: error.message });
      });
  };
}

export function getEmployeeDetails(url) {
  return function(dispatch) {
    dispatch({ type: "EMP_FETCHING" });
    axios
      .get(url)
      .then(response => {
        dispatch({ type: "EMP_FTCH_SUCCESS", userDetails: response.data });
      })
      .catch(error => {
        dispatch({ type: "EMP_FTCH_ERROR", error: error.message });
      });
  };
}

export function addDepartment(dept) {
  return function(dispatch) {
    dispatch({ type: "IS_CREATE" });
    axios
      .post("http://localhost:3004/departments", { name: dept })
      .then(response => {
        dispatch({ type: "CREATE_SUCCESS", userDetails: response.data });
      })
      .catch(error => {
        dispatch({ type: "CREATE_FAILURE", error: error.message });
      });
  };
}
