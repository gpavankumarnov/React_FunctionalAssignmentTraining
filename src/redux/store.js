import { configureStore } from "@reduxjs/toolkit";
import { updateAddFormData } from "./reducer/addFormDataReducer";

export const reduxStore = configureStore(
  { reducer: updateAddFormData },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(reduxStore);
