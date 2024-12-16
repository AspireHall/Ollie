import React from "react";
import classes from "./Dex.module.css";
import Raydium from "../../../Assets/Raydiumlogo.jpg";
import EthLogo from "../../../Assets/EthereumLogo.png";
import DexData from "./dex.json";

const Dex = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer}>
        Decentralized Exchanges (DEX)
      </div>
      <div className={classes.subContainer}>
        {DexData.map((data) => (
          <a href={data.url} target="_blank" rel="noreferrer">
            <div className={classes.card}>
              <img
                className={classes.dexLogo}
                src={data.logo}
                alt={data.name}
              />
              <di className={classes.cardTitle}>{data.name}</di>
              <img className={classes.chainLogo} src={data.chainLogo} />
            </div>
          </a>
        ))}
      </div>
      <div className={classes.note}>More Dex being added</div>
    </div>
  );
};

export default Dex;
