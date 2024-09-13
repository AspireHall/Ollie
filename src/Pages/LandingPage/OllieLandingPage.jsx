import React from "react";
import "./style.css";
import coins from "../../Assets/olliecoins.png";
import Minesweeper from "../../Minesweeper/Minesweeper";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Navbar from "../../NavBar/Navbar";
import Footer from "../../Footer/Footer";
import PriceTicks from "../../Features/PriceTicks";
export const OllieLandingPage = () => {
  return (
    <div>
      <Navbar />
      <PriceTicks />
      <div className="ollie-landing-page">
        <div className="div">
          <Section1 />
          <Section2 />
          <Section3 />

          <div className="frame-10">
            <div className="ollieContainer">
              <div className="boardcontainer">
                <div className="board">
                  <Minesweeper />
                </div>
              </div>
            </div>
            <div className="whatisOllie">
              <div className="Ollieleft">
                <img className="image-3" alt="Image" src={coins} />
              </div>
              <div className="Ollieright">
                <div className="text-wrapper-3">How To Buy Token?</div>
                <p className="text-wrapper-9">
                  Head Over to Raydium.io or click on the button below to buy
                  Ollie Coin
                </p>
                <br></br>
                <p className="text-wrapper-9">
                  Contract Address: 9T6X98LaLfeCmyZnMuCeaXX7Fh9P6t7Hi6izSruGm1qi
                </p>
                <br></br>
                <div className="frame-5">
                  <a
                    href="https://raydium.io/swap/?inputMint=sol&outputMint=9T6X98LaLfeCmyZnMuCeaXX7Fh9P6t7Hi6izSruGm1qi"
                    className="buy-now"
                  >
                    BUY NOW
                  </a>
                </div>
              </div>
            </div>

            <div className="frame-15">
              <div className="text-wrapper-3">What is Ollie Coin?</div>

              <p className="text-wrapper-10">
                Ollie coin is a meme coin with no intrinsic value or expectation
                of financial return. There is no formal team or roadmap. Ollie
                coin is completely useless and for entertainment purposes only.
              </p>
            </div>
            <div className="div-wrapper">
              <div className="div-wrapper"></div>
            </div>
          </div>
          <div className="frame-13">
            <div className="frame-14"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
