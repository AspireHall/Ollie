import React from "react";
import x from "../Assets/X_Twiter_logo.jpg";
import classes from "./Footer.module.css";
import logo2 from "../Assets/OlliTextLogowhite.png";

const Footer = () => {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.leftcontainer}>
          <img className={classes.logo2} src={logo2} alt="logo2" />
        </div>
        <div className={classes.middlecontainer}>
          <a href="https://x.com/Ollie_memecoin">
            <img className={classes.xlogo} alt="Frame" src={x} />
          </a>
        </div>
        <div className={classes.rightcontainer}>
          <p className={classes.text}>
            All Right Reserved&nbsp;&nbsp;Ollie Coin&nbsp;&nbsp; Privacy Policy
            2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
