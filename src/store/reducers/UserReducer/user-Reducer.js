const initialState = {};

const userReduce = (state = initialState, action) => {
  if (action.type === "SET_USER") {
    console.log("4. Masuk Reducer:", action);
    return action.payload;
  }

  return state;
};

export default userReduce;
