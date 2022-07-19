import React, { useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
// import addBtn from "./images/addBtn.svg";
// import sectionLeftImage from "./images/section_left__image.svg";
import searchIcon from "./images/icon_search.svg";
// import AddFormModal from "../AddFormModal";
import filterSearch from "../../../../../redux/actions/index";

function SafesLeftHeader({ safesDataList, searchDataFromChild }) {
  const [searchValue, setSearchValue] = useState(false);

  const dispatch = useDispatch();

  // let timeoutId;

  // const searchFilter = () => {
  //   console.log("printing value");
  //   // const filteredList = safesDataList.filter(
  //   //   (item) => item.SafeName === searchValue
  //   // );

  // };

  // let timeID;

  // // const searchFunc = debounce(searchFilter, 3000);

  // const searchFunc = (e) => {
  //   console.log(e);

  //   clearInterval(timeID);
  //   setSearchValue(e);
  //   timeID = setTimeout(searchFilter, 3000);
  // };

  // function debounce(func, delay) {
  //   return function () {
  //     clearInterval(timeID);
  //     timeID = setTimeout(() => {
  //       func();
  //     }, delay);
  //   };
  // }

  return (
    <div className="content__left-header">
      <p className="content__left-content">All&nbsp;Safes&nbsp;()</p>
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
