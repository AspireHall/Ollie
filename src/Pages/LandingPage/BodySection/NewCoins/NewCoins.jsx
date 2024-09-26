import React from "react";
import classes from "./NewCoins.module.css";
import { useGetLatestTokenProfilesQuery } from "../../../../Features/dexScreenerApi";

const NewCoins = () => {
  const { data, error, isLoading } = useGetLatestTokenProfilesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  return (
    <div className={classes.mainContainer}>
      {data?.slice(0, 20).map((item) => (
        <div className={classes.cardContainer} key={item.tokenAddress}>
          <a href={item.url}>
            <div className={classes.iconContainer}>
              <img className={classes.icon} src={item.icon} alt="icon" />

              <p className={classes.description}>
                {item.description?.slice(0, 75)}...
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewCoins;
