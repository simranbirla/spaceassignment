import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import LaunchReducer from "./launchReducer";

export default combineReducers({
  auth: AuthReducer,
  launch: LaunchReducer,
});
