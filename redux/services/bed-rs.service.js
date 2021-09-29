import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bedRsApi = createApi({
  reducerPath: 'bedRsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rs-bed-covid-api.vercel.app/api' }),
  endpoints: (builder) => ({
    getProvinces: builder.query({
      query: () => `/get-provinces`,
    }),
    getRegencyByProvince: builder.query({
      query: (id) => `/get-cities?provinceid=${id}`,
    }),
    getHospital: builder.query({
      // type: 1 for covid, 2 for non-covid
      query: ({ province_id, city_id, type }) => `/get-hospitals?provinceid=${province_id}&cityid=${city_id}&type=${type}`,
    }),
    getBedDetailByHospital: builder.query({
      query: ({ hospital_id, type }) => `/get-bed-detail?hospitalid=${hospital_id}&type=${type}`,
    }),
    getHospitalMap: builder.query({
      query: (hospital_id) => `/get-hospital-map?hospitalid=${hospital_id}`,
    }),
  }),
});

export const {
  useGetProvincesQuery,
  useGetRegencyByProvinceQuery,
  useGetHospitalQuery,
  useGetBedDetailByHospitalQuery,
  useGetHospitalMapQuery,
} = bedRsApi;

// API Documentation
// https://github.com/satyawikananda/rs-bed-covid-indo-api
