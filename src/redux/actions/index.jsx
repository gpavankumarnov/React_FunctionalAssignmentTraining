const initialValues = {
  safesList: [],
};

export const addFormData = () => {
  return {
    type: "ADD",
    payload: formValues,
  };
};
