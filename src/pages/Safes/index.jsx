import React, { useEffect, useState } from "react";
import "./index.css";
import SafesLeftHeader from "./components/SafesLeft/SafesLeftHeader/index";
import SafesRightHeader from "./components/SafesRight/SafesRightHeader/index";
import SafesLeftContent from "./components/SafesLeft/SafesLeftContent";
import SafesRightContent from "./components/SafesRight/SafesRightContent/index";
import { useSelector } from "react-redux/es/exports";

const SafesComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [list, setList] = useState([]);
  const [dataExport, setDataExport] = useState(false);

  const safeData = useSelector((state) => state.safeList);
  const activeSafeData = useSelector((state) => state.activeSafe);

  let id;

  const updateQuery = (data) => {
    clearTimeout(id);
    id = setTimeout(() => {
      console.log("printing value------>", data);
      setSearchValue(data);
    }, 500);
  };

  // const filteredList = safeData.filter((item) => item.SafeName === searchValue);

  // console.log(filteredList);

  /**
    //get the search with debounch over here. reducer is not required.
    const filteredList = safeData.filter((item) => item.SafeName === data);
    console.log(filteredList);
    setList(filteredList);
    return filteredList;
  };

  let timeID;

  const updateQuery1 = debounce(searchFilter(data), 3000);

  function debounce(func, delay) {
    return function () {
      clearInterval(timeID);
      timeID = setTimeout(() => {
        func();
      }, delay);
    };
  }

 **/
  // useEffect = (() => console.log("useEffect is being calling"), []);

  useEffect(() => {
    console.log("useEffect is being calling  ", dataExport);
    setDataExport(false);

    if (searchValue === "") {
      setList(...safeData);

      console.log("printing searchData is empty!!!");
      setDataExport(false);
    } else if (searchValue !== null) {
      const filteredList = safeData.filter((item) =>
        item.SafeName.toLowerCase().includes(searchValue)
      );
      console.log(filteredList);
      setList(filteredList);
      setDataExport(true);
      console.log("safeFilterOnSearch", list);
    }
  }, [searchValue, dataExport, list, safeData]);

  return (
    <section className="main">
      <div className="content">
        <div className="content__left">
          <SafesLeftHeader
            searchDataFromChild={updateQuery}
            safesDataList={safeData}
            safesDataExport={dataExport}
            filteredSafeOnSearch={list}
          />
          <SafesLeftContent
            safesDataExport={dataExport}
            safesSearchValue={dataExport && searchValue}
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
