function CounterReducer(prevState = { count: 0 }, action) {
  let newState;

  //action.type is an implicit attribute sent while dispatching
  switch (action.type) {
    case "INCREMENT":
      newState = { ...prevState, count: prevState.count + 1 };
      break;

    case "DECREMENT":
      newState = { ...prevState, count: prevState.count - 1 };
      break;

    default:
      newState = { ...prevState };
      break;
  }
  return newState;
}

export default CounterReducer;
