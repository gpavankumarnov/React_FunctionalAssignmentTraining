import { combineReducers } from "redux";
import { updateAddFormData } from "./reducer/updateAddFormData";

//central store
export const rootReducer = combineReducers({
  updateAddFormData,
});
