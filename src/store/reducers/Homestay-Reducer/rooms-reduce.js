const initialState = [];

const roomsReduce = (state = initialState, action) => {
  if (action.type === "SET_LIST_ROOMS") {
    console.log("4. Masuk Reducer:", action);
    return action.payload;
  }

  return state;
};

export default roomsReduce;
