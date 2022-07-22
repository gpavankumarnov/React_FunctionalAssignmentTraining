import React, { useState } from "react";
import "./index.css";
import iconImage from "./icon_safe.svg";
import { useDispatch } from "react-redux";
import addingForm from "../../../../../redux/actions";
import { v4 as uuidv4 } from "uuid";

function AddFormModal(props) {
  const initialValues = {
    SafeName: "",
    Owner: "",
    Type: "",
    Description: "",
    id: uuidv4(),
    // activeIndex : "",
    secrets: [],
  };

  // console.log(props.closeModal());

  const [formValues, setFormValues] = useState(initialValues);
  // const [typeDropdownValue, setTypeDropdownValue] = useState("");
  // const [safeNameField, setSafeNameField] = useState(true);
  const [dropdownType, setDropdownType] = useState("Personal");

  const dispatch = useDispatch();

  // console.log(e.target);
  //e.target - returns the specific element on which we are doing onchange.
  //With the element, we can get the values using attribute.
  //...formValues - if given directly(formValues) then it creates object inside object so we use spread to put only properties inside the object.
  //we use spread operators here to manage instead of giving each as key:value pair of object, we just use spread operator and set the state for which one we need to change.

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value, Type: dropdownType });
    console.log(formValues);
  };

  const dropdownValueType = (value) => {
    formValues.Type = setDropdownType(value);
  };

  const onCreateBtnClick = (e) => {
    e.preventDefault();

    dispatch(addingForm(formValues));

    props.closeModal();
  };

  const onCancelBtnClick = (e) => {
    e.preventDefault();
    props.closeModal();
  };

  console.log(formValues);
  console.log(dropdownType);

  return (
    <div className="modal__cover">
      <div className="modal">
        <div className="overlay">
          <div className="addForm__form">
            <h3>Create Safe</h3>
            <div className="addForm">
              <img className="icon-img" src={iconImage} alt="icon-img" />
              <p className="form_text">
                A Safe is a logical unit to store the secrets. All the safes are
                created within Vault. You can control access only at the safe
                level. As a vault administrator you can manage safes but cannot
                view the content of the safe.
              </p>
            </div>
            <form>
              <label htmlFor="safeName">Safe Name</label>
              <input
                className="input"
                type="text"
                placeholder="&nbsp;Safe Name"
                name="SafeName"
                value={formValues.SafeName}
                onChange={handleChange}
                maxLength={25}
              ></input>
              <label htmlFor="owner">Owner</label>
              <input
                className="input"
                type="text"
                placeholder="&nbsp;Owner"
                name="Owner"
                value={formValues.Owner}
                onChange={handleChange}
                maxLength={25}
              ></input>
              <label htmlFor="type">Type</label>

              <select
                id="dropdown"
                name="Type"
                onChange={(e) => dropdownValueType(e.target.value)}
                value={dropdownType}
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
                value={formValues.Description}
                onChange={handleChange}
                name="Description"
                maxLength={50}
                minLength={10}
              ></textarea>

              <p className="form_DescriptionText">
                Please add a minimum of 10 characters
              </p>
              <div className="create__cancelBtn">
                <button onClick={onCancelBtnClick}>Cancel</button>
                <button
                  disabled={
                    formValues.SafeName !== "" &&
                    formValues.Owner !== "" &&
                    formValues.Type !== "" &&
                    formValues.Description.length > 10
                      ? false
                      : true
                  }
                  className="create-btn"
                  onClick={onCreateBtnClick}
                >
                  +Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddFormModal;
