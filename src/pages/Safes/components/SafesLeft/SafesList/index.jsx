import React from "react";
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

function SafesList({ safesListAddBtn }) {
  // const safesData = useSelector((state) => state.SafeList);
  // console.log("store data ", safesData[0]);

  // const [safeCardName, setSafeCardName] = useState("");

  const safesData = useSelector((state) => state.safeList);
  const dispatch = useDispatch();

  const deleteSafeCardItem = (e, deleteId) => {
    console.log("delete card ------", deleteId);
    e.stopPropagation();
    dispatch(deleteCard(deleteId));
    dispatch(onDeleteUpdateActiveSafe(deleteId));
  };

  const onClickActiveIndex = (updateId) => {
    console.log("activeIndexUpdate::", updateId);
    // const filteredSafeName = safesData.filter((e) => e.id === updateId);
    // const onClickSafeName = filteredSafeName[0].SafeName;
    // setSafeCardName(onClickSafeName);
    dispatch(onClickActiveInd(updateId));
  };

  //same logic in redux reducer for delete

  console.log("safesData is ::", safesData[0]);
  // const safeListSafeName = safesData.map((name) => <p>{name.SafeName}</p>);

  return (
    <>
      <div className="content__left-list">
        <div className="content__left-listData">
          {safesData.map((name, index) => (
            <p
              className="safeCard"
              key={name.id}
              onClick={() => onClickActiveIndex(name)}
            >
              {/* <div className="content__left-list"> */}
              <img
                className="safeIcon"
                src={safeListIcon}
                alt="safesList-Icon"
              ></img>
              {/* </div> */}
              <div className="safeCard-time">
                <h3 className="content__left-list">{name.SafeName}</h3>
                <p>
                  Last updated: {moment().startOf("hour").fromNow()} • USER SAFE
                </p>
              </div>
              {/* <div className="content__left-list"> */}
              <img
                className="icon"
                src={safeListEdit}
                onClick={safesListAddBtn}
                alt="edit-Button"
              ></img>
              <img
                className="icon"
                onClick={(e) => deleteSafeCardItem(e, name.id)}
                src={safeListDelete}
                alt="delete-Button"
              ></img>
              {/* </div> */}
            </p>
          ))}
        </div>
      </div>

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
    </>
  );
}
export default SafesList;
