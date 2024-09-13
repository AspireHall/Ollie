import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accessKey = process.env.REACT_APP_COINLAYER_API_KEY;

// Define a service using a base URL and expected endpoints
export const coinLayerApi = createApi({
  reducerPath: "coinLayerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://api.coinlayer.com/api/",
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
