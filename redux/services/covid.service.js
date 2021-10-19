import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const covidApi = createApi({
  reducerPath: 'covidApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://covid19.mathdro.id/api' }),
  endpoints: (builder) => ({
    getGlobalSummary: builder.query({
      query: () => ``,
    }),
    getGlobalConfirmed: builder.query({
      query: () => `/confirmed`,
    }),
    getDailySummary: builder.query({
      query: () => `/daily`,
    }),
    getDailySummaryByDate: builder.query({
      query: (date) => `/daily/${date}`, // date format e.g 2-14-2020
    }),
    getAllCountries: builder.query({
      query: () => `/countries`,
    }),
    getSummaryCountry: builder.query({
      query: (country) => `/countries/${country}`,
    }),
  }),
});

export const {
  useGetGlobalSummaryQuery,
  useGetGlobalConfirmedQuery,
  useGetDailySummaryQuery,
  useGetDailySummaryByDateQuery,
  useGetAllCountriesQuery,
  useGetSummaryCountryQuery,
} = covidApi;

// API Documentation
// https://github.com/mathdroid/covid-19-api
