import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Define a service using a base URL and expected endpoints
export const polygonApi = createApi({
  reducerPath: "polygonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.polygon.io/",
    prepareHeaders: (headers) => {
      headers.set("Authorization", "Bearer BaoMOAgTtpCcMQHVSKKiLGrCjoXgpyQl ");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllTickers: builder.query({
      query: () => "/v2/snapshot/locale/global/markets/crypto/tickers",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllTickersQuery } = polygonApi;
