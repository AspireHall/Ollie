import React from "react";
import { useGetAllTickersQuery } from "./polygonApi";

const PolygonPriceTicks = () => {
  const { data, error, isLoading } = useGetAllTickersQuery();
  console.log(data);

  return (
    <div>
      <div>Polygon </div>
      <h4></h4>
    </div>
  );
};

export default PolygonPriceTicks;
