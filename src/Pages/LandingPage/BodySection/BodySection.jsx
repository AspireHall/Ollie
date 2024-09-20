import React from "react";
import classes from "./BodySection.module.css";
import BodyNavbar from "./BodyNavbar";
import BodyCryptoNews from "./BodyCryptoNews/BodyCryptoNews";

const BodySection = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}></div>
      <div className={classes.middleContainer}>
        <BodyNavbar />
        <BodyCryptoNews />
      </div>
      <div className={classes.rightContainer}></div>
    </div>
  );
};

export default BodySection;
