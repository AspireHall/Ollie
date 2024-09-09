import React from "react";
import "../screens/OllieLandingPage/style.css";
import Board from "./Board";

const Minesweeper = () => {
  return (
    <div>
      <h1 className="Olliesweeper">OllieSweeper</h1>
      <Board />
    </div>
  );
};

export default Minesweeper;
