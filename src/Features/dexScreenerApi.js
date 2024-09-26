import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Define a service using a base URL and expected endpoints

export const dexScreenerApi = createApi({
  reducerPath: "dexScreenerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.dexscreener.com/",
  }),
  endpoints: (builder) => ({
    getLatestTokenProfiles: builder.query({
      query: () => "/token-profiles/latest/v1",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetLatestTokenProfilesQuery, useLazyOrdersPaidQuery } =
  dexScreenerApi;
