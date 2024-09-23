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
              Ollie coin is a meme coin with no intrinsic value or expectation
              of financial return. There is no formal team or roadmap. Ollie
              coin is completely useless and for entertainment purposes only.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.rightContainer} />
    </div>
  );
};

export default HowToBuy;
