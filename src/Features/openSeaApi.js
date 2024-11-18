import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const openSeaApi = createApi({
  reducerPath: "openSeaApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.opensea.io/api/v2/collections",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      headers.set("x-api-key", "06f7fc373fb74ce9848cf85414baa503");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getOpenSeaByCreationDate: builder.query({
      query: () => "?order_by=created_date",
    }),
  }),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export const { useGetOpenSeaByCreationDateQuery } = openSeaApi;
