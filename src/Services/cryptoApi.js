import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoHeaders = {
  "X-RapidAPI-Key": process.env.XRapidAPIKey,
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const newsApiKey = process.env.newsApiKey;

export const cryptoApi = createApi({
  reducerPath: `cryptoName`,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com",
  }),

  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (limit) => ({
        url: `/coins?limit=${limit}`,
        headers: cryptoHeaders,
      }),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => ({
        url: `/coin/${coinId}`,
        headers: cryptoHeaders,
      }),
    }),

    getCryptoHistory: builder.query({
      query: (coinId, timeperiod) => ({
        url: `/coin/${coinId}/history?timeperiod=${timeperiod}`,
        headers: cryptoHeaders,
      }),
    }),

    getCryptoNews: builder.query({
      query: (pageSize) => ({
        url: `https://newsapi.org/v2/everything?q=crypto+bitcoin&pageSize=${pageSize}&apiKey=${newsApiKey}`,
      }),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoNewsQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
