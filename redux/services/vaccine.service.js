import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vaccineApi = createApi({
  reducerPath: "vaccineApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://cekdiri.id/vaksinasi/" }),
  endpoints: (builder) => ({
    getIndonesiaVaccineSummary: builder.query({
      query: () => ``,
    }),
  }),
});

export const { useGetIndonesiaVaccineSummaryQuery } = vaccineApi;

// API Documentation
// https://github.com/Reynadi531/vaksincovid19-api
