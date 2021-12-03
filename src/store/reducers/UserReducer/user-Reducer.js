const initialState = {};

const userReduce = (state = initialState, action) => {
  if (action.type === "SET_USER") {
    console.log("4. Data Login Masuk Reducer Bos:", action);
    return action.payload;
  }

  return state;
};

export default userReduce;
