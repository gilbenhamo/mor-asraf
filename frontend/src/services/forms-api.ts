// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const formsApi = createApi({
  reducerPath: "formsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3002/api/forms/",
  }),

  endpoints: (builder) => ({
    sendContactForm: builder.mutation({
        query: (data) => ({
          url: `contact`,
          method: "POST",
          body: data,
        }),
      }),

  }),
});

export const { useSendContactFormMutation } = formsApi;
