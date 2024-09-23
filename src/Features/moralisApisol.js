import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Define a service using a base URL and expected endpoints
const address = "3879898";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjRiYzllNjEyLWYzNDctNGRkMC1iZjc3LTFjOTk0Mjk2ZWI4MSIsIm9yZ0lkIjoiNDA5MDQ5IiwidXNlcklkIjoiNDIwMzI5IiwidHlwZUlkIjoiYTI2NDI2MTQtODFiNi00NzFmLTg2ZTctMmQyMDMzMDQzOWVkIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MjY5NzQyMzAsImV4cCI6NDg4MjczNDIzMH0.6CP9DOQvhtA6N6KMfNSIXfGheup5nAKkt_cW76f0tKk";

export const moralisApisol = createApi({
  reducerPath: "moralisApisol",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://solana-gateway.moralis.io/token/mainnet/",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json"),
        headers.set("Access-Control-Allow-Headers", "*"),
        headers.set("X-API-Key", API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTokenPrice: builder.query({
      query: () => "/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/price",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTokenPriceQuery } = moralisApisol;
