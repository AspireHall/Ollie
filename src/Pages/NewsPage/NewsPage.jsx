import React from "react";
import { useGetAllTickersQuery } from "../../Features/polygonApi";
import { useGetCryptoNewsQuery } from "../../Features/cryptoNewsApi";
import classes from "./NewsPage.module.css";

const NewsPage = () => {
  const { data, error, isLoading } = useGetAllTickersQuery();
  const {
    data: newsData,
    error: newsError,
    isLoading: newsIsLoading,
  } = useGetCryptoNewsQuery();
  return (
    <div className={classes.mainContainer}>
      {error ? (
        <>Oh, no there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div>
          <div className={classes.container}>
            <h1 className={classes.newsTitle}>{newsData?.data[0].title}</h1>
            <h1>{newsData?.data[0].date}</h1>
            <h1>{newsData?.data[0].text}</h1>
            <a href={newsData?.data[0].news_url}>
              <img
                className={classes.urlimage}
                src={newsData?.data[0].image_url}
                alt=""
              />
            </a>
          </div>
          <div className={classes.container}>
            <h1 className={classes.newsTitle}>{newsData?.data[1].title}</h1>
            <h1>{newsData?.data[1].date}</h1>
            <h1>{newsData?.data[1].text}</h1>
            <a href={newsData?.data[1].news_url}>
              <img
                className={classes.urlimage}
                src={newsData?.data[1].image_url}
                alt=""
              />
            </a>
          </div>
          <div className={classes.container}>
            <h1 className={classes.newsTitle}>{newsData?.data[2].title}</h1>
            <h1>{newsData?.data[2].date}</h1>
            <h1>{newsData?.data[2].text}</h1>
            <a href={newsData?.data[2].news_url}>
              <img
                className={classes.urlimage}
                src={newsData?.data[2].image_url}
                alt=""
              />
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NewsPage;
