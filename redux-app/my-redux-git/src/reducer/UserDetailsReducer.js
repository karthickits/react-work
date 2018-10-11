function UserDetailsReducer(
  prevState = {
    fetching: false,
    userDetails: [],
    error: "",
    selectId: 0
  },
  action
) {
  let newState;
  switch (action.type) {
    case "IS_FETCHING":
      newState = {
        ...prevState,
        fetching: true,
        userDetails: [],
        error: ""
      };
      break;
    case "FETCH_SUCCESS":
      newState = {
        ...prevState,
        fetching: false,
        userDetails: action.userDetails,
        error: ""
      };
      break;
    case "FETCH_ERROR":
      newState = {
        ...prevState,
        fetching: false,
        userDetails: [],
        error: action.error
      };
      break;
    case "DPT_FETCHING":
      newState = {
        ...prevState,
        fetching: true,
        userDetails: [],
        error: ""
      };
      break;
    case "DPT_FTCH_SUCCESS":
      newState = {
        ...prevState,
        fetching: true,
        userDetails: action.userDetails,
        error: ""
      };
      break;
    case "DPT_FTCH_ERROR":
      newState = {
        ...prevState,
        fetching: true,
        userDetails: [],
        error: ""
      };
      break;
    case "EMP_FETCHING":
      newState = {
        ...prevState,
        fetching: true,
        userDetails: [],
        error: ""
      };
      break;
    case "EMP_FTCH_SUCCESS":
      newState = {
        ...prevState,
        fetching: true,
        userDetails: action.userDetails,
        error: ""
      };
      break;
    case "EMP_FTCH_ERROR":
      newState = {
        ...prevState,
        fetching: true,
        userDetails: [],
        error: ""
      };
      break;
    default:
      newState = { ...prevState };
      break;
  }
  return newState;
}

export default UserDetailsReducer;
