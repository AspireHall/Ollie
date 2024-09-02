import React from "react";
import "./style.css";
import x from "./X_Twiter_logo.jpg";
import Chart from "../../Chart/Chart";
import coins from "../../../src/screens//OllieLandingPage/olliecoins.png";

export const OllieLandingPage = () => {
  return (
    <div className="ollie-landing-page">
      <div className="div">
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
        <div className="overlap-group">
          <img className="img" alt="Frame" src="/img/frame-2.png" />
        </div>
        <div className="overlap-2">
          <div className="frame-wrapper">
            <div className="frame-6">
              <div className="text-wrapper-3">About Ollie</div>
              <div className="frame-7">
                <p className="text-wrapper-4">
                  Ollie is the adorable sloth that wants to relax and enjoy the
                  market. The dogs, the cats, the pepe, the inu and everything
                  in between can move over and make room for the adorable sloth.
                </p>
                <div className="text-wrapper-3"> Ollienomics</div>
                <p className="text-wrapper-4">• Supply: 1 Billion</p>
                <p className="text-wrapper-4">
                  • Contract Renounce and LP Burned
                </p>
                <p className="text-wrapper-4">
                  • 95% Of Liquity Release to Market in Phases
                </p>
                <p className="text-wrapper-4">• Starting Price $0.0000015</p>
              </div>
            </div>
          </div>
          <img className="image" alt="Image" src="/img/image-3.png" />
          <div className="group">
            <div className="overlap-3">
              <div className="image-wrapper">
                <img className="image-2" alt="Image" src="/img/image-7.png" />
              </div>
              <div className="text-wrapper-6">Launching on Raydium Dex</div>
            </div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <div className="rectangle-wrapper">
              <Chart />
            </div>
          </div>
        </div>
        <div className="frame-10">
          <img className="image-3" alt="Image" src={coins} />
          <div className="frame-11">
            <div className="frame-3">
              <div className="text-wrapper-3">How To Buy Token?</div>
              <div className="frame-12">
                <p className="text-wrapper-9">
                  Head Over to Raydium.io or click on the button below to buy
                  Ollie Coin
                </p>
                <p className="text-wrapper-9">
                  Contract Address: 9T6X98LaLfeCmyZnMuCeaXX7Fh9P6t7Hi6izSruGm1qi
                </p>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="div-wrapper">
                <div className="frame-5">
                  <a
                    href="https://raydium.io/swap/?inputMint=sol&outputMint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"
                    className="buy-now"
                  >
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-13">
          <div className="frame-14">
            <div className="frame-15">
              <div className="text-wrapper-3">What is Ollie Coin?</div>
              <div className="frame-16">
                <p className="text-wrapper-10">
                  Ollie coin is a meme coin with no intrinsic value or
                  expectation of financial return. There is no formal team or
                  roadmap. Ollie coin is completely useless and for
                  entertainment purposes only.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-4">
          <div className="frame-17">
            <div className="frame-18">
              <div className="frame-19">
                <img className="image-4" alt="Image" src="/img/image-1.png" />
                <div className="text-wrapper-11">Ollie</div>
              </div>
              <a href="https://x.com/Ollie_memecoin">
                <img className="x" alt="Frame" src={x} />
              </a>
            </div>
            <p className="all-right-reserved">
              All Right Reserved&nbsp;&nbsp;Ollie Coin&nbsp;&nbsp; Privacy
              Policy 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
