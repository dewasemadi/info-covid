import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const indonesiaCovidApi = createApi({
  reducerPath: "indonesiaCovidApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://apicovid19indonesia-v2.vercel.app/api/indonesia" }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: () => ``,
    }),
    getDetailSummary: builder.query({
      query: () => `/more`,
    }),
    getDailySummary: builder.query({
      query: () => `/harian`,
    }),
    getDataByProvinces: builder.query({
      query: () => `/provinsi`,
    }),
    getDailyDataProvinces: builder.query({
      query: () => `/provinsi/harian`,
    }),
  }),
});

export const {
  useGetSummaryQuery,
  useGetDetailSummaryQuery,
  useGetDailySummaryQuery,
  useGetDataByProvincesQuery,
  useGetDailyDataProvincesQuery,
} = indonesiaCovidApi;

// API Documentation
// https://github.com/Reynadi531/api-covid19-indonesia-v2
