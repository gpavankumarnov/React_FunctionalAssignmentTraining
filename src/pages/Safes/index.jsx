import React from "react";
import "./index.css";
import SafesLeftHeader from "./components/SafesLeft/SafesLeftHeader/index";
import SafesRightHeader from "./components/SafesRight/SafesRightHeader/index";
import SafesLeftContent from "./components/SafesLeft/SafesLeftContent";
import SafesRightContent from "./components/SafesRight/SafesRightContent/index";
import { useSelector } from "react-redux/es/exports";

const SafesComponent = () => {
  const safeData = useSelector((state) => state.safeList);
  const activeSafeData = useSelector((state) => state.activeSafe);

  return (
    <section className="main">
      <div className="content">
        <div className="content__left">
          <SafesLeftHeader />
          <SafesLeftContent />
        </div>
        <div className="content__right">
          <SafesRightHeader
            activeSafeData={activeSafeData}
            safesData={safeData}
          />
          <SafesRightContent activeSafeData={activeSafeData} />
        </div>
      </div>
    </section>
  );
};

export default SafesComponent;
