import React from "react";
import classes from "./HeaderAd.module.css";
import { useGetCryptoNewsQuery } from "../../../Features/cryptoNewsApi";

const HeaderAd = () => {
  const { data, error, isLoading } = useGetCryptoNewsQuery();

  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}></div>
      <div className={classes.middleContainer}>
        <div className={classes.middleLeft}>
          <h1 className={classes.title}>{data?.data[0].title}</h1>
          <br></br>
          <br></br>
          <h1 className={classes.text}>
            {data?.data[0].text.substring(0, 150)}...
          </h1>
          <br></br>
          <br></br>
          <a className={classes.button} href={data?.data[0].news_url}>
            Read Article
          </a>
        </div>
        <div className={classes.middleRight}>
          <img className={classes.image} src={data?.data[0].image_url} />
        </div>
      </div>
      <div className={classes.rightContainer}></div>
    </div>
  );
};

export default HeaderAd;
