import React from "react";
import "./index.css";
import sectionRightImage from "./images/Banner_img.svg";

function SafesRightHeader() {
  return (
    <div className="content__right">
      <div className="content__right-header">
        <img
          className="sectionRightBannerImage"
          src={sectionRightImage}
          alt="SafeBanner"
        />
        <div className="sectionRight__Content">
          <h2>No Safes Created Yet</h2>
          <p className="contentRight_Text">
            Create a Safe to see your secrets, folders and permissions here
          </p>
        </div>
      </div>
    </div>
  );
}

export default SafesRightHeader;
