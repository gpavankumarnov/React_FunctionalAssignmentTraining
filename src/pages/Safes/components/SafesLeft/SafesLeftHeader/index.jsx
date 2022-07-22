import React from "react";
import "./index.css";
// import { useDispatch } from "react-redux";
// import addBtn from "./images/addBtn.svg";
// import sectionLeftImage from "./images/section_left__image.svg";
import searchIcon from "./images/icon_search.svg";
// import AddFormModal from "../AddFormModal";
// import filterSearch from "../../../../../redux/actions/index";

function SafesLeftHeader({
  safesDataList,
  searchDataFromChild,
  safesDataExport,
  filteredSafeOnSearch,
}) {
  // const dispatch = useDispatch();

  console.log("-----------------", safesDataExport);

  return (
    <div className="content__left-header">
      <p className="content__left-content">
        <b>
          All&nbsp;Safes&nbsp;(
          {safesDataExport === false
            ? safesDataList.length
            : filteredSafeOnSearch.length}
          )
        </b>
      </p>
      <button>
        <img className="searchIcon" src={searchIcon} alt="search icon" />
        <input
          type="text"
          placeholder="Search"
          name="search"
          onChange={(e) => searchDataFromChild(e.target.value)}
        ></input>
      </button>
    </div>
  );
}

export default SafesLeftHeader;
