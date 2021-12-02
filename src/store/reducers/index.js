import { combineReducers } from "redux";
import login from "./Login/login-Reducer.js";
import user from "./UserReducer/user-Reducer.js";

const rootReducers = combineReducers({
  login,
  user,
});

export default rootReducers;
