import { combineReducers } from "redux";
import login from "./Login/login-Reducer.js";
import user from "./UserReducer/user-Reducer.js";
import listHomestay from "./Homestay-Reducer/homestay-reduce.js";
import detailHomestay from "./Homestay-Reducer/detail-homestay-reduce";
import listRooms from "./Homestay-Reducer/rooms-reduce.js";
import loading from "./loading-reduce.js";
import addHomestay from "./Homestay-Reducer/add-homestay-reduce.js";
import addRoom from "./Homestay-Reducer/add-room-reduce.js";
import editHomestay from "./Homestay-Reducer/edit-homestay-reduce";

const rootReducers = combineReducers({
  login,
  user,
  listHomestay,
  detailHomestay,
  addHomestay,
  addRoom,
  listRooms,
  loading,
  editHomestay,
});

export default rootReducers;
