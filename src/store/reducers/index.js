import { combineReducers } from "redux";
import login from "./Login/login-Reducer.js";
import user from "./UserReducer/user-Reducer.js";
import listHomestay from "./Homestay-Reducer/homestay-reduce.js";

const rootReducers = combineReducers({
  login,
  user,
  listHomestay,
});

export default rootReducers;
