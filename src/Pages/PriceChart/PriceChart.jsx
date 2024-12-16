import React from "react";
import classes from "./PriceChart.module.css";
import Chart from "../../Chart/Chart";

const PriceChart = () => {
  return (
    <div className={classes.mainContainer}>
      <h1 className={classes.title}>Price Chart</h1>
      <div className={classes.subContainer}>
        <Chart />
      </div>
    </div>
  );
};

export default PriceChart;
