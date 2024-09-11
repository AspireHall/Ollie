import React from "react";
import jaguar from "../Assets/Jaquar32pixel.png";

export default function Circle() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <img src={jaguar} alt="jaguar" />
      </div>
    </div>
  );
}
