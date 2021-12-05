const initialState = {};

const addHomestayReduce = (state = initialState, action) => {
  if (action.type === "SET_ADD_HOMESTAY") {
    console.log("4. Masuk Reducer add homestay:", action);
    return action.payload;
  }

  return state;
};

export default addHomestayReduce;
