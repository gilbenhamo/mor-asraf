import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./slice/booking-reducer";
import { detailsApi } from "../services/details-api";

const store = configureStore({
  reducer: {
    booking: bookingReducer,
    [detailsApi.reducerPath]: detailsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([detailsApi.middleware]),
});

export default store;

/*********TYPES:**********/
//needed in order to import the state - we use this type in the select function in each slice:
export type RootState = ReturnType<typeof store.getState>;
//we need this type in order to dispatch the action:
export type AppDispatch = typeof store.dispatch;
