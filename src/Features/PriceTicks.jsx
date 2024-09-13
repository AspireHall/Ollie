import React from "react";
import classes from "./PriceTicks.module.css";
import { useGetPriceByCoinQuery } from "./CoinLayerApi";

const PriceTicks = () => {
  const { data, error, isLoading } = useGetPriceByCoinQuery("en-US");
  let btc = data?.rates.BTC.toFixed(0).toLocaleString("en-US");
  let eth = data?.rates.ETH.toFixed(0).toLocaleString("en-US");
  let bnb = data?.rates.BNB.toFixed(0).toLocaleString("en-US");
  let sol = data?.rates.SOL.toFixed(0).toLocaleString("en-US");
  let xrp = data?.rates.XRP.toFixed(3).toLocaleString("en-US");
  let ada = data?.rates.ADA.toFixed(3).toLocaleString("en-US");
  let doge = data?.rates.DOGE.toFixed(3).toLocaleString("en-US");
  let avax = data?.rates.AVAX.toFixed(2).toLocaleString("en-US");

  return (
    <div className={classes.mainContainer}>
      <h1 className={classes.symbolText}>BTC</h1>
      <h1 className={classes.priceText}>${btc}</h1>
      <h1 className={classes.symbolText}>ETH</h1>
      <h1 className={classes.priceText}>${eth}</h1>
      <h1 className={classes.symbolText}>BNB</h1>
      <h1 className={classes.priceText}>${bnb}</h1>
      <h1 className={classes.symbolText}>SOL</h1>
      <h1 className={classes.priceText}>${sol}</h1>
      <h1 className={classes.symbolText}>XRP</h1>
      <h1 className={classes.priceText}>${xrp}</h1>
      <h1 className={classes.symbolText}>ADA</h1>
      <h1 className={classes.priceText}>${ada}</h1>
      <h1 className={classes.symbolText}>DOGE</h1>
      <h1 className={classes.priceText}>${doge}</h1>
      <h1 className={classes.symbolText}>AVAX</h1>
      <h1 className={classes.priceText}>${avax}</h1>
    </div>
  );
};

export default PriceTicks;
