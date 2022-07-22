import React, { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import safeListIcon from "./images/icon_safeList.svg";
import safeListEdit from "./images/icon_edit_active.svg";
import safeListDelete from "./images/icon_delete_inactive.svg";
import "./index.css";
import addBtn from "../SafesLeftContent/images/addBtn.svg";
import { useDispatch } from "react-redux/es/exports";
import { deleteCard } from "../../../../../redux/actions/index";
import { onClickActiveInd } from "../../../../../redux/actions/index";
import { onDeleteUpdateActiveSafe } from "../../../../../redux/actions/index";
import moment from "moment/moment.js";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import EditFormModal from "../EditFormModal";

function SafesList({
  safesListAddBtn,
  activeSafeData,
  SafeFilterOnSearch,
  safeSearchData,
  searchDataExportTrueFalse,
}) {
  // const safesData = useSelector((state) => state.SafeList);
  // console.log("store data ", safesData[0]);

  //

  const safesData = useSelector((state) => state.safeList);
  const dispatch = useDispatch();
  const [editForm, setEditForm] = useState(false);
  // const [searchData, setSearchData] = useState(false);

  // const data = {...activeSafeData}

  const deleteSafeCardItem = (e, deleteId) => {
    console.log("delete card ------", deleteId);
    e.stopPropagation();
    dispatch(deleteCard(deleteId));
    dispatch(onDeleteUpdateActiveSafe(deleteId));
  };

  const onClickActiveIndex = (updateId) => {
    // const filteredSafeName = safesData.filter((e) => e.id === updateId);
    // const onClickSafeName = filteredSafeName[0].SafeName;
    // setSafeCardName(onClickSafeName);
    dispatch(onClickActiveInd(updateId));
  };

  const editClick = () => {
    setEditForm(true);
  };

  const onUpdate_CancelBtnClick = () => {
    setEditForm(false);
  };

  // const SearchDataStateSet = () => {
  //   if (safeSearchData !== null) {
  //     setSearchData(true);
  //   }
  // };

  const safes = safesData.length;

  //same logic in redux reducer for delete

  // const safeListSafeName = safesData.map((name) => <p>{name.SafeName}</p>);

  return (
    <>
      <div className="content__left-list">
        <div className="content__left-listData">
          {searchDataExportTrueFalse === false
            ? safesData.map((name, index) => (
                <div
                  className="safeCard"
                  key={name.id}
                  onClick={() => onClickActiveIndex(name)}
                  style={{
                    background:
                      name.id === activeSafeData.id
                        ? "linear-gradient(to right, #72134b, #1d212c)"
                        : "black",
                  }}
                >
                  <img
                    className="safeIcon"
                    src={safeListIcon}
                    alt="safesList-Icon"
                  ></img>

                  <div className="safeCard-time">
                    <h3 className="content__left-list">{name.SafeName}</h3>
                    <p>
                      Last updated: {moment().startOf("hour").fromNow()} • USER
                      SAFE
                    </p>
                  </div>

                  <img
                    className="icon"
                    src={safeListEdit}
                    onClick={editClick}
                    alt="edit-Button"
                  ></img>
                  <img
                    className="icon"
                    onClick={(e) => deleteSafeCardItem(e, name.id)}
                    src={safeListDelete}
                    alt="delete-Button"
                  ></img>
                </div>
              ))
            : SafeFilterOnSearch.map((name, index) => (
                <div
                  className="safeCard"
                  key={name.id}
                  onClick={() => onClickActiveIndex(name)}
                  style={{
                    background:
                      name.id === activeSafeData.id
                        ? "linear-gradient(to right, #72134b, #1d212c)"
                        : "black",
                  }}
                >
                  <img
                    className="safeIcon"
                    src={safeListIcon}
                    alt="safesList-Icon"
                  ></img>

                  <div className="safeCard-time">
                    <h3 className="content__left-list">{name.SafeName}</h3>
                    <p>
                      Last updated: {moment().startOf("hour").fromNow()} • USER
                      SAFE
                    </p>
                  </div>

                  <img
                    className="icon"
                    src={safeListEdit}
                    onClick={editClick}
                    alt="edit-Button"
                  ></img>
                  <img
                    className="icon"
                    onClick={(e) => deleteSafeCardItem(e, name.id)}
                    src={safeListDelete}
                    alt="delete-Button"
                  ></img>
                </div>
              ))}
        </div>
      </div>
      {safes >= 1 ? (
        <div className="safesList-addBtn">
          <Tippy
            theme={"light"}
            interactive={"true"}
            content="Create New Safe"
            placement="left"
          >
            <img src={addBtn} alt="create" onClick={safesListAddBtn} />
          </Tippy>
        </div>
      ) : null}
      {editForm && (
        <EditFormModal
          onUpdate={onUpdate_CancelBtnClick}
          activeSafeDataList={activeSafeData}
        />
      )}
    </>
  );
}
export default SafesList;
