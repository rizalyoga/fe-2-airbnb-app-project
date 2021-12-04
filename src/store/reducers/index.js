import { combineReducers } from "redux";
import login from "./Login/login-Reducer.js";
import user from "./UserReducer/user-Reducer.js";
import listHomestay from "./Homestay-Reducer/homestay-reduce.js";
import detailHomestay from "./Homestay-Reducer/detail-homestay-reduce";
import listRooms from "./Homestay-Reducer/rooms-reduce.js";
import loading from "./loading-reduce.js";

const rootReducers = combineReducers({
  login,
  user,
  listHomestay,
  detailHomestay,
  listRooms,
  loading,
});

export default rootReducers;
