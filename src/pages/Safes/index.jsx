import React, { useEffect, useState } from "react";
import "./index.css";
import SafesLeftHeader from "./components/SafesLeft/SafesLeftHeader/index";
import SafesRightHeader from "./components/SafesRight/SafesRightHeader/index";
import SafesLeftContent from "./components/SafesLeft/SafesLeftContent";
import SafesRightContent from "./components/SafesRight/SafesRightContent/index";
import { useSelector } from "react-redux/es/exports";

const SafesComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [list, setList] = useState("");

  const safeData = useSelector((state) => state.safeList);
  const activeSafeData = useSelector((state) => state.activeSafe);

  const searchFilter = (data) => {
    console.log("printing value");
    setSearchValue(data);
    const filteredList = safeData.filter((item) => item.SafeName === data);
    console.log(filteredList);
    setList(filteredList);
    return filteredList;
  };

  let timeID;

  const updateQuery = debounce(searchFilter, 3000);

  function debounce(func, delay) {
    return function () {
      clearInterval(timeID);
      timeID = setTimeout(() => {
        func();
      }, delay);
    };
  }

  // const dataFromSafesLeftHeader = (childData) => {
  //   console.log("childData is :", childData);
  //   setSearchValue(childData);
  //   console.log("setSearchValue is", searchValue);
  // };

  // useEffect = (() => console.log("useEffect is being calling"), []);

  useEffect(() => {
    console.log("useEffect is being calling");

    if (searchValue === null) {
      setList(...safeData);

      console.log("list is:", list);
    } else if (searchValue !== null) {
      updateQuery();

      console.log("list if has value", list);
    }
  }, [searchValue]);

  // console.log("from parent side", safeData);

  //childData, safeData
  // useEffect =
  //   (() => console.log("useEffect is calling"),
  //   // if (childData === "") {
  //   //   setData(safeData);
  //   //   console.log("safesData is:", safeData);
  //   //   return safeData;
  //   // } else if (childData >= 0) {
  //   //   console.log(searchFunc());

  //   //   return searchFunc();
  //   // }
  //   [searvhvalue]);

  // const searchFunc = () => {
  //   console.log("searchFunc calling");
  //   clearInterval(timeoutID);
  //   timeoutID = setTimeout(searchFilter(searchValue), 3000);
  // };

  // const searchFilter = (searchValue) => {
  //   console.log(setSearchValue);
  //   console.log("searchFilter called", safeData);

  //   filteredSafeName = safeData.filter((item) => item.SafeName === searchValue);
  //   // setList({ ...filteredSafeName });
  //   console.log("filtered vlaue is ", filteredSafeName);
  //   setList(...filteredSafeName);
  //   console.log("$$$$$$$", list);
  //   // return filteredSafeName;
  // };

  console.log("safesList value is", list);
  return (
    <section className="main">
      <div className="content">
        <div className="content__left">
          <SafesLeftHeader
            searchDataFromChild={updateQuery}
            safesDataList={safeData}
          />
          <SafesLeftContent
            filteredSafeOnSearch={list}
            safesDataList={safeData}
            activeSafesData={activeSafeData}
          />
        </div>
        <div className="content__right">
          <SafesRightHeader
            activeSafeData={activeSafeData}
            safesData={safeData}
          />
          <SafesRightContent
            activeSafeData={activeSafeData}
            safesDataList={safeData}
          />
        </div>
      </div>
    </section>
  );
};

export default SafesComponent;
