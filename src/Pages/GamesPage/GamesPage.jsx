import React from "react";
import classes from "./GamesPage.module.css";
import Minesweeper from "../../Minesweeper/Minesweeper";

const GamesPage = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.secondContainer}>
        <h1 className={classes.title}>..More games coming soon...</h1>
      </div>
      <div className={classes.thirdContainer}>
        <div className={classes.mineContainer}>
          <Minesweeper />
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
