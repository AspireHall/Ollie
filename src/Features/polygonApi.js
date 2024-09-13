import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const accessKey = "";

// Define a service using a base URL and expected endpoints
export const polygonApi = createApi({
  reducerPath: "polygonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.polygon.io/v2/aggs/",
  }),
  endpoints: (builder) => ({
    getPriceByCoin: builder.query({
      query: () => "/live",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPriceByCoinQuery } = coinLayerApi;
