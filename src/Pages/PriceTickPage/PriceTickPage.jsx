import React from "react";
import classes from "./PriceTicks.module.css";
import { useGetTokenPriceQuery } from "../../Features/moralisApisol";

const PriceTickPage = () => {
  const { data, error, isLoading } = useGetTokenPriceQuery();
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error && 2000) {
    return <div>error on page</div>;
  }
  return (
    <div className={classes.mainContainer}>
      <div className={classes.title}>Price Ticks coming soon...</div>
      <br></br>
      <div className={classes.title}>
        {data.exchangeName}
        <br></br>
        {data.nativePrice.symbol}
        <br></br>${data.usdPrice.toFixed(3)}
      </div>
    </div>
  );
};

export default PriceTickPage;
