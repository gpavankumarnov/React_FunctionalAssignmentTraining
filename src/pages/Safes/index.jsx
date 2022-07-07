import React from "react";
import "./index.css";
import SafesLeftHeader from "./components/SafesLeft/SafesLeftHeader/index";
import SafesRightHeader from "./components/SafesRight/SafesRightHeader/index";

const SafesComponent = () => {
  return (
    <section className="main">
      <div className="content">
        <SafesLeftHeader />
        <SafesRightHeader />
        {/* <div className="content__right"></div> */}
      </div>
    </section>
  );
};

export default SafesComponent;
