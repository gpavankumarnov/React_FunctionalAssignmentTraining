import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { updateEditForm } from "../../../../../redux/actions";
import iconImage from "./images/icon_safe.svg";

function EditFormModal({ activeSafeDataList, onUpdate }) {
  console.log("::::actveSafe", activeSafeDataList);

  const data = { ...activeSafeDataList };

  const [editFormValues, setEditFormValues] = useState(data);
  const [typeDropdownValue, setTypeDropdownValue] = useState("");
  console.log("::::::: edit", editFormValues);

  const dispatch = useDispatch();

  // console.log(e.target);
  //e.target - returns the specific element on which we are doing onchange.
  //With the element, we can get the values using attribute.
  //...formValues - if given directly(formValues) then it creates object inside object so we use spread to put only properties inside the object.
  //we use spread operators here to manage instead of giving each as key:value pair of object, we just use spread operator and set the state for which one we need to change.

  // ****
  const handleChange = (e) => {
    const { name, value } = e.target;

    setEditFormValues({
      ...editFormValues,
      [name]: value,
      Type: typeDropdownValue,
    });
    console.log(editFormValues);
  };

  const onUpdateBtnClick = (e) => {
    e.preventDefault();

    dispatch(updateEditForm(editFormValues));
    console.log("triggering update btn");
    onUpdate();
  };

  const onCancelBtnClick = (e) => {
    e.preventDefault();

    console.log("triggering close btn");
    onUpdate();
  };

  return (
    <div className="overlay">
      <div className="addForm__form">
        <h3>Create Safe</h3>
        <div className="addForm">
          <img className="icon-img" src={iconImage} alt="icon-img" />
          <p className="form_text">
            A Safe is a logical unit to store the secrets. All the safes are
            created within Vault. You can control access only at the safe level.
            As a vault administrator you can manage safes but cannot view the
            content of the safe.
          </p>
        </div>
        <form>
          <label htmlFor="safeName">Safe Name</label>
          <input
            className="input"
            type="text"
            placeholder="&nbsp;Safe Name"
            name="SafeName"
            value={editFormValues.SafeName}
            onChange={handleChange}
          ></input>
          <label htmlFor="owner">Owner</label>
          <input
            className="input"
            type="text"
            placeholder="&nbsp;Owner"
            name="Owner"
            value={editFormValues.Owner}
            onChange={handleChange}
          ></input>
          <label htmlFor="type">Type</label>

          <select
            id="dropdown"
            name="Type"
            value={typeDropdownValue}
            onChange={(e) => setTypeDropdownValue(e.target.value)}
          >
            <option value="Personal">Personal</option>
            <option value="Other">Other</option>
          </select>
          {/* </input> */}
          <label htmlFor="description">Description</label>
          <textarea
            className="form_textarea"
            rows="3"
            cols="50"
            placeholder="Description"
            value={editFormValues.Description}
            onChange={handleChange}
            name="Description"
          ></textarea>

          <p className="form_DescriptionText">
            Please add a minimum of 10 characters
          </p>
          <div className="create__cancelBtn">
            <button onClick={onCancelBtnClick}>Cancel</button>
            <button onClick={onUpdateBtnClick}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditFormModal;
