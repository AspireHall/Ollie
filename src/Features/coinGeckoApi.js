import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coinGeckoApi = createApi({
  reducerPath: "coinGeckoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/",
  }),
  endpoints: (builder) => ({
    getBitcoinPrice: builder.query({
      query: () => "/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
    }),
    getEthPrice: builder.query({
      query: () => "/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
    }),
    getAllCoinPrice: builder.query({
      query: () => "/api/v3/coins/markets?vs_currency=usd&per_page=10",
    }),
  }),
});

// Export hooks for usage in functional components, which are

// auto-generated based on the defined endpoints

export const {
  useGetBitcoinPriceQuery,
  useGetEthPriceQuery,
  useGetAllCoinPriceQuery,
} = coinGeckoApi;
