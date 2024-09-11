import React from "react";
import babysloth from "../../Assets/BabySlothCoin300pix.png";
import "./style.css";

const Section2 = () => {
  return (
    <div className="overlap-2">
      <div>
        <div className="frame-6">
          <div className="text-wrapper-3">About Ollie</div>
          <div className="frame-7">
            <p className="text-wrapper-4">
              Ollie is the adorable sloth that wants to relax and enjoy the
              market. The dogs, the cats, the pepe, the inu and everything in
              between can move over and make room for the adorable sloth.
              <br />
              <br />
              Bringing Services, price ticks, and games to help you in your
              crypto journey. Watch your favorite token, compare prices, and
              save favorites. Ollie bringing you these services, while you play
              a game or two and being an adorable sloth to be at your side.
            </p>
            <div className="text-wrapper-3"> Ollienomics</div>
            <p className="text-wrapper-4">• Supply: 1 Billion</p>
            <p className="text-wrapper-4">• Contract Renounce and LP Burned</p>
            <p className="text-wrapper-4">
              • 95% Of Liquity Release to Market in Phases
            </p>
            <p className="text-wrapper-4">• Starting Price $0.0000015</p>
          </div>
        </div>
      </div>
      <img className="image" alt="Image" src={babysloth} />
      <div className="group">
        <div className="overlap-3">
          <div className="image-wrapper">
            <img className="image-2" alt="Image" src="/img/image-7.png" />
          </div>
          <div className="text-wrapper-6">Launching on Raydium Dex</div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
