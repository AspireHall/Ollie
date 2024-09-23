import React from "react";
import classes from "./BodySection.module.css";
import BodyNavbar from "./BodyNavbar";
import BodyCryptoNews from "./BodyCryptoNews/BodyCryptoNews";
import Chart from "../../../Chart/Chart";

const BodySection = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}></div>
      <div className={classes.middleContainer}>
        <BodyNavbar />
        <BodyCryptoNews />
        <div className={classes.chartContainer}>
          <Chart />
        </div>
      </div>
      <div className={classes.rightContainer}></div>
    </div>
  );
};

export default BodySection;
