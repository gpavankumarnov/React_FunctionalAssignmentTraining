import { configureStore } from "react-redux";
import updateAddFormData from "./reducer";

export const store = configureStore(updateAddFormData);
