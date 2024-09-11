import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}>
        <img className={classes.logo} alt="Frame" src="/img/frame-2.png" />
      </div>
      <div className={classes.centerContainer}>
        <h1 className={classes.centerText}>Services • Price Ticks • Games</h1>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.buttonoutline}>
          <img
            className={classes.icon}
            alt="Icon park outline"
            src="/img/icon-park-outline-buy.svg"
          />
          <a
            href="https://raydium.io/swap/?inputMint=sol&outputMint=9T6X98LaLfeCmyZnMuCeaXX7Fh9P6t7Hi6izSruGm1qi"
            className={classes.buycoin}
          >
            BUY COIN
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
