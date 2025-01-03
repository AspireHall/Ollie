import React from "react";
import classes from "./HowToBuy.module.css";
import coins from "../../../Assets/olliecoins.png";

const HowToBuy = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.subContainer}>
        <div className="frame-15">
          <div className={classes.title}>Ollie Analytical Platform</div>
          <p className={classes.text}>
            Crypto Analytical and informational platform. A place to discover
            new and existing blockchains, coins, nfts, crypto news, games,
            centralize exchanges, decentralize exchanges and much more. Our aim
            is to be the one stop shop for all your crypto informational needs.
            We are constantly adding new features and services to our platform
            that will enhance your crypto experience. If there is a feature you
            would like for us to add to our platform, please let us know. Kindly
            contact us your request and we will get back to you as soon as
            possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
