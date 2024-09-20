import React from "react";
import classes from "./BodyNavbar.module.css";
import { Link } from "react-router-dom";

const BodyNavbar = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.menuBar}>
        <Link className={classes.link} to="">
          Crypto News
        </Link>
        <Link className={classes.link} to="">
          Web3Games
        </Link>
        <Link className={classes.link} to="">
          DEX
        </Link>
        <Link className={classes.link} to="">
          CEX
        </Link>
        <Link className={classes.link} to="">
          Price Ticks
        </Link>
        <Link className={classes.link} to="">
          New Coins
        </Link>
      </div>
    </div>
  );
};

export default BodyNavbar;
