const initialState = [];

const homestayReduce = (state = initialState, action) => {
  if (action.type === "SET_LIST_HOMESTAY") {
    console.log("4. Masuk Reducer:", action);
    return action.payload;
  }

  return state;
};

export default homestayReduce;
