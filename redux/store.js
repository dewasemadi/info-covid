import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { covidApi } from './services/covid.service';
import { indonesiaCovidApi } from './services/covid-indonesia.service';
import { vaccineApi } from './services/vaccine.service';
import { bedRsApi } from './services/bed-rs.service';

const store = configureStore({
  reducer: {
    [covidApi.reducerPath]: covidApi.reducer,
    [indonesiaCovidApi.reducerPath]: indonesiaCovidApi.reducer,
    [vaccineApi.reducerPath]: vaccineApi.reducer,
    [bedRsApi.reducerPath]: bedRsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(covidApi.middleware)
      .concat(indonesiaCovidApi.middleware)
      .concat(vaccineApi.middleware)
      .concat(bedRsApi.middleware),
});

setupListeners(store.dispatch);
export default store;
