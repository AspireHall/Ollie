import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const accessKey = "4mzcJhViKrVsMtZUTQeAmjtfBIaVVGak";

// Define a service using a base URL and expected endpoints
export const blockspanApi = createApi({
  reducerPath: "blockspanApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.blockspan.com/",
    prepareHeaders: (headers) => {
      headers.set("x-api-key", accessKey);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getOpenSeaNFTs: builder.query({
      query: () =>
        "/v1/exchanges/collections?chain=eth-main&exchange=opensea&page_size=30",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetOpenSeaNFTsQuery } = blockspanApi;
