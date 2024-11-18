import React from "react";
import classes from "./NewCoins.module.css";
import { useGetLatestTokenProfilesQuery } from "../../../../Features/dexScreenerApi";

const NewCoins = () => {
  const { data, error, isLoading } = useGetLatestTokenProfilesQuery();
  console.log(data);

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
            <img
              className={classes.openGraph}
              src={item.openGraph}
              alt="icon"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewCoins;
