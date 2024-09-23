import React from "react";
import classes from "./Chart.module.css";

const Chart = () => {
  const src =
    "https://dexscreener.com/solana/CD4LNnrw822QoyddCT6qkghdWYecQDu8SuSfTtF7oFCX?embed=1&theme=dark";

  return (
    <>
      <iframe className={classes.chart} src={src}></iframe>
    </>
  );
};

export default Chart;
