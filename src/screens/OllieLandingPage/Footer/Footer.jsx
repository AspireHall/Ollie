import React from "react";
import x from "../X_Twiter_logo.jpg";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.leftcontainer}>
          <img className={classes.logo} alt="Image" src="/img/image-1.png" />
          <h1 className={classes.logotext}>Ollie</h1>
        </div>
        <div className={classes.middlecontainer}>
          <a href="https://x.com/Ollie_memecoin">
            <img className={classes.xlogo} alt="Frame" src={x} />
          </a>
        </div>
        <div className={classes.rightcontainer}>
          <p>
            All Right Reserved&nbsp;&nbsp;Ollie Coin&nbsp;&nbsp; Privacy Policy
            2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
