const initialFormData = {
  safesList: [],
};

export const updateAddFormData = (state = initialFormData, action) => {
  if (action.type === "ADD") {
    return state;
  }
};
