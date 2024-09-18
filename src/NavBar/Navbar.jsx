import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../Assets/OllieCoinlogo.png";
import PriceTicks from "../Features/PriceTicks";

const Navbar = () => {
  return (
    <div>
      <div className={classes.mainContainer}>
        <div className={classes.leftContainer}>
          <img className={classes.logo2} alt="Frame" src={logo} />
          <h1 className={classes.logoTitle}>Ollie</h1>
        </div>
        <div className={classes.centerContainer}>
          <Link className={classes.menuText} to="/">
            Home
          </Link>
          <Link className={classes.menuText} to="/News">
            News
          </Link>
          <Link className={classes.menuText} to="/Services">
            Services
          </Link>
          <Link className={classes.menuText} to="/PriceTicks">
            Price Ticks
          </Link>
          <Link className={classes.menuText} to="/Games">
            Games
          </Link>
          <Link className={classes.menuText} to="/About">
            About
          </Link>
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
      <PriceTicks />
    </div>
  );
};

export default Navbar;
