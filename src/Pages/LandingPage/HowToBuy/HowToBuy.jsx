import React from "react";
import classes from "./HowToBuy.module.css";
import coins from "../../../Assets/olliecoins.png";

const HowToBuy = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer} />
      <div className={classes.middleContainer}>
        <div className={classes.middleLeft}>
          <img className={classes.image} alt="Image" src={coins} />
        </div>
        <div className={classes.middleRight}>
          <p className={classes.title}>Contract Address: </p>
          <p className={classes.text}>
            9T6X98LaLfeCmyZnMuCeaXX7Fh9P6t7Hi6izSruGm1qi
          </p>
          <br></br>
          <br />

          <div className="frame-15">
            <div className={classes.title}>What is Ollie Coin?</div>

            <p className={classes.text}>
              Ollie coin is the official coin of the Ollie Analytical Platform.
              This project is still under development. The value of the coin is
              speculative and does not carry any intrinsic value. Ollie coin
              will have utility for this platform, as the the project grows.
              Follow us at https://x.com/ollie_memecoin to stay up to date on
              the latest news.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.rightContainer} />
    </div>
  );
};

export default HowToBuy;
