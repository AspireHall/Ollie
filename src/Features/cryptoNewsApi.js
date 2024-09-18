import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Define a service using a base URL and expected endpoints
const apikey = "ecaah5qugp3jomppw19hjft4f0x7slqdaxe9q8sg";
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cryptonews-api.com/api/v1/",
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () =>
        "/category?section=general&items=3&page=1&token=ecaah5qugp3jomppw19hjft4f0x7slqdaxe9q8sg ",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
