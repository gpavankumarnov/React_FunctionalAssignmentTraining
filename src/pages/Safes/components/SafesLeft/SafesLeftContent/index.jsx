import React, { useState } from "react";
import "./index.css";
import addBtn from "./images/addBtn.svg";
import { useSelector } from "react-redux/es/exports";
import AddFormModal from "../AddFormModal";
import SafesList from "../SafesList/index";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
// import "tippy.js/theme/light.css";
import "tippy.js/themes/light.css";

function SafesLeftContent({
  activeSafesData,
  filteredSafeOnSearch,
  safesSearchValue,
  safesDataExport,
}) {
  const [addShowForm, setAddShowForm] = useState(false);
  const [addSafesList, setAddSafesList] = useState(false);

  const safesData = useSelector((state) => state.safeList);

  const setAddShowFormFunc = () => {
    setAddShowForm(false);
    setAddSafesList(true);
  };

  const safesListSetAddShowFormFunc = () => {
    setAddShowForm(true);
  };

  console.log("dataExport------------->", safesDataExport);

  return (
    <div className="safes__list">
      {safesData.length === 0 ? (
        <div className="content__left-data">
          {addSafesList && (
            <SafesList
              searchDataExportTrueFalse={safesDataExport}
              SafeFilterOnSearch={filteredSafeOnSearch}
              activeSafeData={activeSafesData}
              safeSearchData={safesSearchValue}
            />
          )}

          <p className="sectionLeftImageText">Create a Safe and get started!</p>
          <div className="addBtn">
            <Tippy
              theme={"light"}
              interactive={"true"}
              content="Create New Safe"
              placement="bottom"
            >
              <img
                src={addBtn}
                alt="create"
                onClick={() => {
                  setAddShowForm(true);
                }}
              />
            </Tippy>
          </div>
        </div>
      ) : (
        <SafesList
          SafeFilterOnSearch={filteredSafeOnSearch}
          searchDataExportTrueFalse={safesDataExport}
          activeSafeData={activeSafesData}
          safesListAddBtn={safesListSetAddShowFormFunc}
        />
      )}
      {addShowForm && <AddFormModal closeModal={setAddShowFormFunc} />}
    </div>
  );
}
export default SafesLeftContent;
