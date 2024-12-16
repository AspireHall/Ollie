import React, { useState } from "react";
import classes from "./BodySection.module.css";
import BodyNavbar from "./BodyNavbar";
import BodyCryptoNews from "./BodyCryptoNews/BodyCryptoNews";
import NewCoins from "./NewCoins/NewCoins";
import Web3Games from "./Web3Games/Web3Games";
import Cex from "./CEX/Cex";
import Dex from "../Dex/Dex";
import bitcoinLogo from "../../../Assets/bitcoinLogo.png";
import { useGetAllCoinPriceQuery } from "../../../Features/coinGeckoApi";

import Chart from "../../../Chart/Chart";

const BodySection = () => {
  const { data, error, isLoading } = useGetAllCoinPriceQuery();

  const [menuLinkSelected, setMenuLinkSelected] = useState(<BodyCryptoNews />);

  const cryptoNewsHandler = () => {
    setMenuLinkSelected(<BodyCryptoNews />);
  };
  const web3GamesHandler = () => {
    setMenuLinkSelected(<Web3Games />);
  };
  const dexHandler = () => {
    setMenuLinkSelected(<Dex />);
  };
  const cexHandler = () => {
    setMenuLinkSelected(<Cex />);
  };

  const newCoinsHandler = () => {
    setMenuLinkSelected(<NewCoins />);
  };

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error on Page</div>;
  }

  console.log(data);
  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}>
        {data?.map((item) => (
          <div className={classes.coinCard} key={item.id}>
            <img className={classes.coinLogo} src={item.image} alt="token" />
            <div className={classes.coinName}>{item.name}</div>
            <div className={classes.coinPrice}>
              ${item.current_price.toLocaleString("en-US")}
            </div>
          </div>
        ))}
      </div>
      <div className={classes.middleContainer}>
        <BodyNavbar
          cryptoNewsHandler={cryptoNewsHandler}
          web3GamesHandler={web3GamesHandler}
          dexHandler={dexHandler}
          cexHandler={cexHandler}
          newCoinsHandler={newCoinsHandler}
        />
        <div>{menuLinkSelected}</div>
      </div>
      <div className={classes.rightContainer}>
        <iframe
          className={classes.rssFeed}
          src="https://www.feedspot.com/widgets/lookup/f9a7b0c3sott"
        ></iframe>
      </div>
    </div>
  );
};

export default BodySection;
