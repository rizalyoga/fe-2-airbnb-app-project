const initialState = {};

const detailHomestayReduce = (state = initialState, action) => {
  if (action.type === "SET_DETAIL_HOMESTAY") {
    console.log("4. Masuk Reducer:", action);
    return action.payload;
  }

  return state;
};

export default detailHomestayReduce;
