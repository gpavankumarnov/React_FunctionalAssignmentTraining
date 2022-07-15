import React, { useState } from "react";
import "./index.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
// import SafesRightContent from "../SafesRightContent/index";
import { addSecret } from "../../../../../redux/actions/index";

function AddSecretForm({ cancelBtn, safesData }) {
  const secretData = {
    id: uuidv4(),
    secretName: "",
  };

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
    console.log("safesData::::::", safesData);
    let safes = { ...safesData };
    let secretArray = [...safes.secrets];
    secretArray.push(secretValue);
    safes.secrets = secretArray;

    dispatch(addSecret(safes));
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
        </div>
      </div>
    </div>
  );
}
export default AddSecretForm;
