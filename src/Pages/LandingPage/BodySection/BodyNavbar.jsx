import React, { useState } from "react";
import classes from "./BodyNavbar.module.css";
import { Link } from "react-router-dom";

const BodyNavbar = (props) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.menuBar}>
        <Link className={classes.link} onClick={props.cryptoNewsHandler}>
          Crypto News
        </Link>
        <Link className={classes.link} onClick={props.web3GamesHandler}>
          Web3Games
        </Link>
        <Link className={classes.link} onClick={props.dexHandler}>
          DEX
        </Link>
        <Link className={classes.link} onClick={props.cexHandler}>
          CEX
        </Link>

        <Link className={classes.link} onClick={props.newCoinsHandler}>
          New Coin/Pools
        </Link>
      </div>
    </div>
  );
};

export default BodyNavbar;
