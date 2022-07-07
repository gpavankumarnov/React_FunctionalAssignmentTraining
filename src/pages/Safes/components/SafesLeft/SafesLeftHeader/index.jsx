import React, { useState } from "react";
import "./index.css";
import addBtn from "./images/addBtn.svg";
import sectionLeftImage from "./images/section_left__image.svg";
import searchIcon from "./images/icon_search.svg";
import AddFormModal from "../AddFormModal";

function SafesLeftHeader() {
  const [addShowForm, setAddShowForm] = useState(false);

  return (
    <div className="content__left">
      <div className="content__left-header">
        <p className="content__left-content">All&nbsp;Safes&nbsp;()</p>
        <button>
          <img className="searchIcon" src={searchIcon} alt="search icon" />
          <input type="text" placeholder="Search" name="search"></input>
        </button>
      </div>
      <div className="content__left-data">
        <img
          className="sectionLeftImage"
          src={sectionLeftImage}
          alt="Create a Safe"
        />
        <p className="sectionLeftImageText">Create a Safe and get started!</p>
        <div className="addBtn">
          <img
            src={addBtn}
            alt="create"
            onClick={() => {
              setAddShowForm(true);
            }}
          />
        </div>
        {addShowForm && <AddFormModal />}
      </div>
    </div>
  );
}

export default SafesLeftHeader;
