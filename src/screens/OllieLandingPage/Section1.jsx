import React from "react";
import "./style.css";

const Section1 = () => {
  return (
    <div className="overlap">
      <img
        className="lovepik-com"
        alt="Lovepik com"
        src="/img/lovepik-com-380219541-cute-brown-slot-clipart-clipart-the-cartoo.png"
      />
      <div className="frame">
        <div className="frame-2">
          <div className="frame-3">
            <div className="frame-4">
              <div className="text-wrapper">Welcome to Ollie</div>
              <p className="p">The Future of Meme Coins Starts Here</p>
            </div>
            <p className="text-wrapper-2">
              Join the meme revolution with Ollie Token. Ollie Empowers your
              financial journey with secure, fast, and decentralized
              transactions. Join the revolution with Ollie Token
            </p>
          </div>
          <div className="div-wrapper">
            <div className="div-wrapper">
              <div className="frame-5">
                <img
                  className="icon-park-outline"
                  alt="Icon park outline"
                  src="/img/icon-park-outline-buy.svg"
                />
                <a
                  href="https://raydium.io/swap/?inputMint=sol&outputMint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"
                  className="buy-coin"
                >
                  BUY COIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
