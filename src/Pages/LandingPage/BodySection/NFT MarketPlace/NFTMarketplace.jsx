import React from "react";
import classes from "./NFTMarket.module.css";
import NftMarketData from "./NFTMarket.json";

const NFTMarketplace = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer}>NFT Marketplaces</div>
      <div className={classes.subContainer}>
        {NftMarketData.map((data) => (
          <a href={data.url} target="_blank" rel="noreferrer">
            <div className={classes.card}>
              <img
                className={classes.dexLogo}
                src={data.logo}
                alt={data.name}
              />
              <div className={classes.cardTitle}>{data.name}</div>
              <br />
            </div>
          </a>
        ))}
      </div>
      <div className={classes.note}>More Markets to be added and verified.</div>
    </div>
  );
};

export default NFTMarketplace;
