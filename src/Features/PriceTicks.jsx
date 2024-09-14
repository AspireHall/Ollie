import React from "react";
import classes from "./PriceTicks.module.css";
import { useGetPriceByCoinQuery } from "./coinLayerApi";

const PriceTicks = () => {
  const { data, error, isLoading } = useGetPriceByCoinQuery();
  console.log(data);

  return (
    <div className={classes.mainContainer}>
      {error ? (
        <>Oh, no there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h1 className={classes.symbolText}>BTC</h1>
          <h1 className={classes.priceText}>
            ${data?.rates.BTC.toFixed(0).toLocaleString("en-US")}
          </h1>
          <h1 className={classes.symbolText}>ETH</h1>
          <h1 className={classes.priceText}>
            ${data?.rates.ETH.toFixed(0).toLocaleString("en-US")}
          </h1>
          <h1 className={classes.symbolText}>BNB</h1>
          <h1 className={classes.priceText}>
            ${data?.rates.BNB.toFixed(0).toLocaleString("en-US")}
          </h1>
          <h1 className={classes.symbolText}>SOL</h1>
          <h1 className={classes.priceText}>
            ${data?.rates.SOL.toFixed(0).toLocaleString("en-US")}
          </h1>
          <h1 className={classes.symbolText}>XRP</h1>
          <h1 className={classes.priceText}>
            ${data?.rates.XRP.toFixed(3).toLocaleString("en-US")}
          </h1>
          <h1 className={classes.symbolText}>ADA</h1>
          <h1 className={classes.priceText}>
            ${data?.rates.ADA.toFixed(3).toLocaleString("en-US")}
          </h1>
          <h1 className={classes.symbolText}>DOGE</h1>
          <h1 className={classes.priceText}>
            ${data?.rates.DOGE.toFixed(3).toLocaleString("en-US")}
          </h1>
          <h1 className={classes.symbolText}>LINK</h1>
          <h1 className={classes.priceText}>
            ${data?.rates.LINK.toFixed(2).toLocaleString("en-US")}
          </h1>
          <h1 className={classes.symbolText}>LTC</h1>
          <h1 className={classes.priceText}>
            ${data?.rates.LTC.toFixed(2).toLocaleString("en-US")}
          </h1>
          <h1 className={classes.symbolText}>XMR</h1>
          <h1 className={classes.priceText}>
            ${data?.rates.XMR.toFixed(2).toLocaleString("en-US")}
          </h1>
        </>
      ) : null}
    </div>
  );
};

export default PriceTicks;
