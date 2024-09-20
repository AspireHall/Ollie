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
  console.log(tickerData);

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
        <a href={item.news_url}>
          <div className={classes.cardContainer} key={item.title}>
            <img className={classes.image} src={item.image_url} />
            <h4 className={classes.title}>{item.title}</h4>
            <div className={classes.button}> Read Article</div>
          </div>
        </a>
      ))}
      {tickerData?.data.map((item) => (
        <a href={item.news_url}>
          <div className={classes.cardContainer} key={item.title}>
            <img className={classes.image} src={item.image_url} />
            <h4 className={classes.title}>{item.title}</h4>
            <div className={classes.button}> Read Article</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default BodyCryptoNews;
