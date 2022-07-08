import { configureStore } from "react-redux";
import { addFormDataReducer } from "./reducer/addFormDataReducer";

export const reduxStore = configureStore(addFormDataReducer);
