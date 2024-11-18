import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = "49f5aaf4-ab86-4400-8fff-1d8d6561485e";

export const magicEdenApi = createApi({
  reducerPath: "magicEdenApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-mainnet.magiceden.dev/v2/",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getMagicEdenNFTs: builder.query({
      query: () => "/collections",
    }),
  }),
});

// Export hooks for usage in functional components, which are

// auto-generated based on the defined endpoints

export const { useGetMagicEdenNFTsQuery } = magicEdenApi;
