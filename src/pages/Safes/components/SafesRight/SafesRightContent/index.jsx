import React, { useState } from "react";
import "./index.css";
import addFolderIcon from "./images/icon_addfolder_inactive.svg";
import AddSecretForm from "../AddSecretForm/index";
import secret_Logo from "./images/img_secrets.svg";

function SafesRightContent({ activeSafeData }) {
  const [showSecretForm, setShowSecretForm] = useState(false);

  const showFormOnClick = () => {
    console.log("showFormOnClick ::");
    setShowSecretForm(true);
  };

  const closeFormOnClick = () => {
    console.log("closeFormOnClick ::");
    setShowSecretForm(false);
  };

  return (
    <div className="content__right-data">
      <div className="content__right-data-header">
        <div className="content-right">
          <p>Secrets</p>
          <p>Permissions</p>
        </div>
        <div className="content-right">
          <p>Add Folder</p>
          <img
            onClick={showFormOnClick}
            src={addFolderIcon}
            alt="addFolder-Button"
          ></img>

          {showSecretForm && (
            <AddSecretForm
              safesData={activeSafeData}
              cancelBtn={closeFormOnClick}
            />
          )}
        </div>
      </div>
      <div className="content__right-data-content">
        <div className="secrets__count">
          <h5>&nbsp; &nbsp;Secrets</h5>
        </div>
        <center>
          <img className="secrets_Logo" src={secret_Logo} alt="secrets_Logo" />
        </center>
        <center>
          <p>
            Add a <span> Folder</span> and then you’ll be able to add <br></br>
            <span>Secrets</span> to view them all here
          </p>
        </center>
        <center>
          <button onClick={showFormOnClick} className="Add-secrets">
            +Add
          </button>
        </center>
      </div>
    </div>
  );
}
export default SafesRightContent;
