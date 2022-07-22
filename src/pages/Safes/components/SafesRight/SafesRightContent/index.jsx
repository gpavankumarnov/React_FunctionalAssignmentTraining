import React, { useState } from "react";
import "./index.css";
import addFolderIcon from "./images/icon_addfolder_inactive.svg";
import AddSecretForm from "../AddSecretForm/index";
import secret_Logo from "./images/img_secrets.svg";
import SecretList from "../SecretList/index";
import addFolderIconActive from "./images/ActiveImage.svg";

function SafesRightContent({ activeSafeData, safesDataList }) {
  const [showSecretForm, setShowSecretForm] = useState(false);

  const showFormOnClick = () => {
    setShowSecretForm(true);
  };

  const closeFormOnClick = () => {
    setShowSecretForm(false);
  };

  // const safes = safesDataList.length;

  return (
    <div className="content__right-data">
      <div className="content__right-data-header">
        <div className="content-right">
          <p>Secrets</p>
          <p>Permissions</p>
        </div>
        <div className="content-right">
          <p>Add Folder</p>
          {safesDataList.length === 0 && (
            <img
              onClick={showFormOnClick}
              src={addFolderIcon}
              alt="addFolder-Button"
              disabled={true}
            ></img>
          )}
          {safesDataList.length > 0 && (
            <img
              onClick={showFormOnClick}
              src={addFolderIconActive}
              alt="addFolder-Button"
            ></img>
          )}

          {showSecretForm && (
            <AddSecretForm
              activeSafesData={activeSafeData}
              cancelBtn={closeFormOnClick}
            />
          )}
        </div>
      </div>
      <div className="content__right-data-content">
        <div className="secrets__count">
          <h5>
            &nbsp; &nbsp;
            {safesDataList.length > 0 && activeSafeData.secrets.length}
            {/* {activeSafeData.length > 0 ? activeSafeData.secrets.length : 0} */}
            &nbsp;Secrets
          </h5>
        </div>
        {/* Object.keys(activeSafeData).length > 0? ( <SecretList />) : ( "" ) */}
        {activeSafeData !== 0 && <SecretList />}
        {safesDataList.length === 0 ? (
          <>
            <center>
              <img
                className="secrets_Logo"
                src={secret_Logo}
                alt="secrets_Logo"
              />
            </center>
            <center>
              <p>
                Add a <span> Folder</span> and then you’ll be able to add{" "}
                <br></br>
                <span>Secrets</span> to view them all here
              </p>
            </center>
            <center>
              <button
                onClick={showFormOnClick}
                className="Add-secrets"
                disabled={safesDataList.length <= 0 && true}
              >
                +Add
              </button>
            </center>
          </>
        ) : activeSafeData.secrets.length <= 0 ? (
          <>
            <center>
              <img
                className="secrets_Logo"
                src={secret_Logo}
                alt="secrets_Logo"
              />
            </center>
            <center>
              <p>
                Add a <span> Folder</span> and then you’ll be able to add{" "}
                <br></br>
                <span>Secrets</span> to view them all here
              </p>
            </center>
            <center>
              <button
                onClick={showFormOnClick}
                className="Add-secrets"
                disabled={safesDataList.length <= 0 && true}
              >
                +Add
              </button>
            </center>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default SafesRightContent;
