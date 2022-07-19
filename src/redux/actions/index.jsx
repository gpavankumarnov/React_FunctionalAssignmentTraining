// import { type } from "@testing-library/user-event/dist/type";
import * as actions from "./actionTypes";

// const initialValues = {
//   safesList: [],
// };

// export const addFormData = () => {
//   return {
//     type: "ADD",
//     payload: formValues,
//   };
// };

//As its a object always need to wrap inside the brackets.
const addingForm = (formValues) => ({
  type: actions.addFormData,
  payload: formValues,
});
export default addingForm;

// const filterSearch = (searchValue) => ({
//   type: actions.filterSearchData,
//   payload: searchValue,
// });

export const addSecret = (addValue) => {
  console.log("this is addValue in action::", addValue);
  return {
    type: actions.addSecretData,
    payload: addValue,
  };
};

export const onClickActiveInd = (activeIndSafeCardId) => ({
  type: actions.activeSafe,
  payload: activeIndSafeCardId,
});

export const deleteCard = (deleteCardId) => ({
  type: actions.deleteSafeCard,
  payload: deleteCardId,
});

export const onDeleteUpdateActiveSafe = (deleteCardIds) => ({
  type: actions.updatedActiveSafeOnDelete,
  payload: deleteCardIds,
});

export const updateEditForm = (editFormValues) => ({
  type: actions.updateEditForm,
  payload: editFormValues,
});

export const deleteSecretItem = (deleteItemID) => ({
  type: actions.deleteSecretCard,
  payload: deleteItemID,
});
