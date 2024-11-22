import React from "react";
import "./style.css";
import Minesweeper from "../../Minesweeper/Minesweeper";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import HeaderAd from "./HeaderAd/HeaderAd";
import BodySection from "./BodySection/BodySection";
import Footer from "../../Footer/Footer";
import HowToBuy from "./HowToBuy/HowToBuy";

export const OllieLandingPage = () => {
  return (
    <div>
      <HeaderAd />
      <BodySection />
      <HowToBuy />
    </div>
  );
};
