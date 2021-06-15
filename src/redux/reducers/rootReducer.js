import { combineReducers } from "redux";
import { sidebar_reducer } from "./reducers.js";
import { create_mode_reducer } from "./reducers";
export const rootReducer = combineReducers({
  sidebar: sidebar_reducer,
  createMode: create_mode_reducer,
});
export default rootReducer;
