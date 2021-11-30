import { combineReducers } from "redux";
import login from "./Login/login-Reducer.js";

const rootReducers = combineReducers({
  login,
});

export default rootReducers;
