import React, { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import secretFolderIcon from "./images/secret__Icon_folderImage.svg";
// import moment from "moment/moment.js";
import "./index.css";

function SecretList() {
  const activeSafeData = useSelector((state) => state.activeSafe);

  // const [cardBgColor, setCardBgColor] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const objectLength = Object.keys(activeSafeData).length;

  const handleClick = () => {
    setIsActive(true);
  };

  console.log("id::::", activeSafeData.secrets[0]);

  return (
    <div className="secret__Cards">
      {objectLength > 0 &&
        activeSafeData.secrets.map((card) => (
          <div
            className="secretList__data"
            onClick={
              activeSafeData.secrets.id === card.id ? { handleClick } : ""
            }
            style={{
              backgroundImage: isActive
                ? "linear-gradient(to top, #72134b, #1d212c)"
                : "",
              backgroundColor: isActive ? " #1c1f29" : "",
            }}
          >
            <div className="secretList__text">
              <img
                className="secretFolderIcon"
                src={secretFolderIcon}
                alt="folderIcon"
              />
            </div>
            <div className="secretList__text">
              <h4 className="card__Name">{card.secretName}</h4>
              <h5 className="new-Text">New</h5>
            </div>
          </div>
        ))}
      {/* <p>{moment().startOf("day").fromNow()}</p> */}
    </div>
  );
}

export default SecretList;
