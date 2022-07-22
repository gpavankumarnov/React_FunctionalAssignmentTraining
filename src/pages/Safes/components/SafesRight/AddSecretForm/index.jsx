import React, { useState } from "react";
import "./index.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
// import SafesRightContent from "../SafesRightContent/index";
import { addSecret } from "../../../../../redux/actions/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddSecretForm({ cancelBtn, activeSafesData }) {
  const secretData = {
    id: uuidv4(),
    secretName: "",
  };

  // secrets: [];

  // safeList: [{}, {}];
  const [secretValue, setSecretValue] = useState(secretData);

  // const [showSecretForm, setShowSecretForm] = useState(false);
  // const [secret, setSecret] = useState(secretData.secretName);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setSecretValue({ ...secretValue, [name]: value });
  };

  const addSecretCard = () => {
    let safes = { ...activeSafesData };
    let secretArray = [...safes.secrets]; //secrets:
    secretArray.push(secretValue);
    safes.secrets = secretArray;
    dispatch(addSecret(safes));
    cancelBtn();
    toast("New Folder has been created successfully");
  };

  return (
    <div className="addSecret__form">
      <div className="addFolder-content">
        <h3 className="addFolder-text">Add Folder</h3>

        <div className="addSecret__input">
          <div className="addSecret__label">
            <label>Folder Name</label>
          </div>
          <div className="addSecret__label">
            <input
              type="text"
              placeholder="Folder Name"
              name="secretName"
              onChange={handleInput}
              value={secretValue.secretName}
            ></input>
          </div>
          <div className="addSecret__label">
            <p>
              Please enter lowercase alphabets, numbers and underscores only.
            </p>
          </div>
        </div>
        <div className="addSecret__input">
          <button onClick={cancelBtn}>Cancel</button>
          {/* {showSecretForm && <SafesRightContent />} */}
          <button onClick={() => addSecretCard()}>Save</button>
          {/* <ToastContainer /> */}
        </div>
      </div>
    </div>
  );
}
export default AddSecretForm;
