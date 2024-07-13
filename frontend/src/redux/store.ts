import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./slice/booking-reducer";
import { detailsApi } from "../services/details-api";
import { formsApi } from "../services/forms-api";
import healthDeclarationReducer from "./slice/health-declaration-reducer";
import { paymentsApi } from "../services/payment-api";

const store = configureStore({
  reducer: {
    booking: bookingReducer,
    health: healthDeclarationReducer,
    [detailsApi.reducerPath]: detailsApi.reducer,
    [formsApi.reducerPath]: formsApi.reducer,
    [paymentsApi.reducerPath]: paymentsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([detailsApi.middleware, formsApi.middleware, paymentsApi.middleware]),
});

export default store;

/*********TYPES:**********/
//needed in order to import the state - we use this type in the select function in each slice:
export type RootState = ReturnType<typeof store.getState>;
//we need this type in order to dispatch the action:
export type AppDispatch = typeof store.dispatch;
