import React from "react";
import "./index.css";
// import { useSelector } from "react-redux/es/exports";

function SafesRightHeader({ activeSafeData, safesData }) {
  // const safesData = useSelector((state) => state.safeList);
  // const safesCardData = useSelector((state) => state.safesCardName_Desc);
  // const activeSafeData = useSelector((state) => state.activeSafe);

  return (
    <div className="content__right-header">
      <div className="banner_Image">
        <div className="sectionRight__Content">
          {safesData <= 0 ? ( //handling based on the active index data.
            <div className="text-content">
              <h2 className="contentRight_Text">No Safes Created Yet</h2>
              <p className="contentRight_Text">
                Create a Safe to see your secrets, folders and permissions here
              </p>
            </div>
          ) : (
            <div className="content-Text" maxLength={25}>
              <h2 maxLength={25}>{activeSafeData.SafeName}</h2>
              <p maxLength={25} className="contentRight_Text">
                {activeSafeData.Description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SafesRightHeader;
