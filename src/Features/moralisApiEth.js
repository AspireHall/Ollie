import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Define a service using a base URL and expected endpoints

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjRiYzllNjEyLWYzNDctNGRkMC1iZjc3LTFjOTk0Mjk2ZWI4MSIsIm9yZ0lkIjoiNDA5MDQ5IiwidXNlcklkIjoiNDIwMzI5IiwidHlwZUlkIjoiYTI2NDI2MTQtODFiNi00NzFmLTg2ZTctMmQyMDMzMDQzOWVkIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjY5NzQyMzAsImV4cCI6NDg4MjczNDIzMH0.6CP9DOQvhtA6N6KMfNSIXfGheup5nAKkt_cW76f0tKk";

export const moralisApiEth = createApi({
  reducerPath: "moralisApiEth",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://deep-index.moralis.io/api/v2.2/erc20/",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json"),
        headers.set("Access-Control-Allow-Headers", "*"),
        headers.set("X-API-Key", API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getErc20TokenPrice: builder.query({
      query: () =>
        "/0xFbE6F37d3db3fc939F665cfe21238c11a5447831/price?chain=eth&include=percent_change'",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetErc20TokenPriceQuery } = moralisApiEth;
