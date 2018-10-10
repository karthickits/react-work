export default function customLoggers(store) {
  return function next(next) {
    return function action(action) {
      console.log("######## ", store);
      console.log("######## ", action);
      console.log("######## ", next);
      next(action);
      console.log("######## ", store);
    };
  };
}

/*const customLogger = store => next => action => {
      console.log("######## ", store);
      console.log("######## ", action);
      console.log("######## ", next);
      next(action);
      console.log("######## ", store);
  }
  
  export default customLogger;*/
