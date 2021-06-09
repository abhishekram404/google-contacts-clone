import { combineReducers } from "redux";
import { sidebar_reducer } from "./reducers.js";
export const rootReducer = combineReducers({ sidebar: sidebar_reducer });
export default rootReducer;
