import React from "react";
import classes from "./PriceTicks.module.css";
import { useGetAllTickersQuery } from "../../Features/polygonApi";

const PriceTickPage = () => {
  return (
    <div className={classes.mainContainer}>
      <h1 className={classes.title}>Price Ticks coming soon...</h1>
    </div>
  );
};

export default PriceTickPage;
