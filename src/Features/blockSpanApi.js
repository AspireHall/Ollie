import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blockSpanApi = createApi({
  reducerPath: "blockSpanApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.blockspan.com/",
    prepareHeaders: (headers) => {
      headers.set("x-api-key", "4mzcJhViKrVsMtZUTQeAmjtfBIaVVGak");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getOpenSeaNFTs: builder.query({
      query: () =>
        "/v1/exchanges/collections?chain=eth-main&exchange=opensea&page_size=30",
    }),

    getOpenSeaRankings: builder.query({
      query: () =>
        "/v1/exchanges/collectionsranking?chain=eth-main&exchange=opensea&ranking=total_volume&page_size=30",
    }),
    getOpenSeaSales: builder.query({
      query: () =>
        "/v1/exchanges/collectionsranking?chain=eth-main&exchange=opensea&ranking=total_sales&page_size=30",
    }),
  }),
});

// Export hooks for usage in functional components, which are

// auto-generated based on the defined endpoints

export const {
  useGetOpenSeaNFTsQuery,
  useGetOpenSeaRankingsQuery,
  useGetOpenSeaSalesQuery,
} = blockSpanApi;
