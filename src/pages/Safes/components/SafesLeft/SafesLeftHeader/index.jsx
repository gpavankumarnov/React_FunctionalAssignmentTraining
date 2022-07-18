import React, { useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
// import addBtn from "./images/addBtn.svg";
// import sectionLeftImage from "./images/section_left__image.svg";
import searchIcon from "./images/icon_search.svg";
// import AddFormModal from "../AddFormModal";
import filterSearch from "../../../../../redux/actions/index";

function SafesLeftHeader({ safesDataList }) {
  const [searchValue, setSearchValue] = useState(false);

  const dispatch = useDispatch();

  let timeoutId;

  const searchFunc = (searchFilter) => {
    // clearInterval(timeoutId), (timeoutId = setTimeout(searchFilter, 2000));
  };

  const searchFilter = (searchValue) => {
    setSearchValue(true);
    console.log("left header filter search total data from store", searchValue);
    const lists = { ...safesDataList };
    // const filteredList = lists.filter((item) => {
    //   item.SafeName === searchValue;
    // // });
    // console.log("data after filter", filteredList);

    dispatch(filterSearch(searchValue));
  };

  return (
    <div className="content__left-header">
      <p className="content__left-content">All&nbsp;Safes&nbsp;()</p>
      <button>
        <img className="searchIcon" src={searchIcon} alt="search icon" />
        <input
          type="text"
          placeholder="Search"
          name="search"
          onChange={(e) => searchFilter(e.target.value)}
        ></input>
      </button>
    </div>
  );
}

export default SafesLeftHeader;
