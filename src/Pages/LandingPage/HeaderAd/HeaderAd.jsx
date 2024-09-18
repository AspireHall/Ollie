import React from "react";
import classes from "./HeaderAd.module.css";
import { useGetCryptoNewsQuery } from "../../../Features/cryptoNewsApi";

const HeaderAd = () => {
  const { data, error, isLoading } = useGetCryptoNewsQuery();
  console.log(data);
  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}>
        <h1 className={classes.title}>{data?.data[0].title}</h1>
        <br></br>
        <br></br>
        <h1 className={classes.text}>{data?.data[0].text}</h1>
        <br></br>
        <br></br>
        <a className={classes.button} href={data?.data[0].news_url}>
          Read Article
        </a>
      </div>
      <div className={classes.rightContainer}>
        <img className={classes.image} src={data?.data[0].image_url} />
      </div>
    </div>
  );
};

export default HeaderAd;
