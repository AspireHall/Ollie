import React from "react";
import classes from "./BodyCryptoNews.module.css";
import {
  useGetAllTickerNewsQuery,
  useGetCryptoNewsQuery,
} from "../../../../Features/cryptoNewsApi";

const BodyCryptoNews = () => {
  const { data, error, isLoading } = useGetCryptoNewsQuery();
  const {
    data: tickerData,
    error: tickerError,
    isLoading: tickerIsLoading,
  } = useGetAllTickerNewsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (tickerIsLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error on Page, try Again</div>;
  }
  if (tickerError) {
    return <div>Error on Page, try Again</div>;
  }

  return (
    <div className={classes.mainContainer}>
      {data?.data.map((item) => (
        <div className={classes.cardContainer} key={item.title}>
          <a href={item.news_url}>
            <img className={classes.image} src={item.image_url} />
            <h4 className={classes.title}>{item.title.slice(0, 60)}...</h4>
            <div className={classes.button}> Read Article</div>
          </a>
        </div>
      ))}
      {tickerData?.data.map((item) => (
        <div className={classes.cardContainer} key={item.title}>
          <a href={item.news_url}>
            <img className={classes.image} src={item.image_url} />
            <h4 className={classes.title}>{item.title.slice(0, 60)}...</h4>
            <div className={classes.button}> Read Article</div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default BodyCryptoNews;
