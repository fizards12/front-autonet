import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import statusReducer from "./status/statusReducer";

const rootReducer = combineReducers({
  users: userReducer,
  status: statusReducer
});

export default rootReducer;
