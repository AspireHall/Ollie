import React, { useState } from "react";
import classes from "./BodySection.module.css";
import BodyNavbar from "./BodyNavbar";
import BodyCryptoNews from "./BodyCryptoNews/BodyCryptoNews";
import NewCoins from "./NewCoins/NewCoins";
import Web3Games from "./Web3Games/Web3Games";
import Cex from "./CEX/Cex";
import Dex from "../Dex/Dex";
import Chart from "../../../Chart/Chart";

const BodySection = () => {
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

  return (
    <div className={classes.mainContainer}>
      <div className={classes.leftContainer}></div>
      <div className={classes.middleContainer}>
        <BodyNavbar
          cryptoNewsHandler={cryptoNewsHandler}
          web3GamesHandler={web3GamesHandler}
          dexHandler={dexHandler}
          cexHandler={cexHandler}
          newCoinsHandler={newCoinsHandler}
        />
        <div>{menuLinkSelected}</div>

        <div className={classes.chartContainer}>
          <Chart />
        </div>
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
