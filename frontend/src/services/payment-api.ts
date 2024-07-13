// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const paymentsApi = createApi({
  reducerPath: "paymentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mor-asraf-api.onrender.com/api/payments",
  }),

  endpoints: (builder) => ({
    getPaymentFrame: builder.mutation({
      query: (data) => ({
        url: ``,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetPaymentFrameMutation } = paymentsApi;
