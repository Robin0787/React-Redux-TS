const logger = (state) => (next) => (action) => {
  console.log("Previous state => ", state.getState());
  console.log("Action => ", action);
  next(action);
  console.log("Next state => ", state.getState());
  console.log("<------------------------------>");
};

export default logger;
