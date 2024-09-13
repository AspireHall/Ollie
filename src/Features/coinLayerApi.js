import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const accessKey = process.env.REACT_APP_COINLAYER_API_KEY;
const realaccessKey = "301b6086caaa44ae88de4510e2e9343b";

// Define a service using a base URL and expected endpoints
export const coinLayerApi = createApi({
  reducerPath: "coinLayerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coinlayer.com/api/",
  }),
  endpoints: (builder) => ({
    getPriceByCoin: builder.query({
      query: () => "/live" + "?access_key=" + accessKey,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPriceByCoinQuery } = coinLayerApi;
