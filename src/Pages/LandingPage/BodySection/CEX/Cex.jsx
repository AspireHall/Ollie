import React from "react";
import CexData from "./cex.json";
import classes from "./Cex.module.css";

const Cex = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.titleContainer}>Centralized Exchanges (DEX)</div>
      <div className={classes.subContainer}>
        {CexData.map((data) => (
          <a href={data.url} target="_blank" rel="noreferrer">
            <div className={classes.card}>
              <img
                className={classes.dexLogo}
                src={data.logo}
                alt={data.name}
              />
              <di className={classes.cardTitle}>{data.name}</di>
            </div>
          </a>
        ))}
      </div>
      <div className={classes.note}>More Exchange to added and verified.</div>
    </div>
  );
};

export default Cex;
