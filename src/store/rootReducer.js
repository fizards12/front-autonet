import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import statusReducer from "./status/statusReducer";

const rootReducer = combineReducers({
  users: userReducer,
  status: statusReducer
});

export default rootReducer;
