const initialState = {};

const addRoomReduce = (state = initialState, action) => {
  if (action.type === "SET_ADD_ROOM") {
    console.log("4. Masuk Reducer add homestay:", action);
    return action.payload;
  }

  return state;
};

export default addRoomReduce;
