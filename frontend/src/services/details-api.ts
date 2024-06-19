// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const detailsApi = createApi({
  reducerPath: "detailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mor-asraf-api.onrender.com/api/",
  }),

  endpoints: (builder) => ({
    getAllGuestSpots: builder.query({
      query: () => `guest-spots`,
    }),

    getGuestSpotById: builder.query({
      query: (id) => `guest-spots/get-by-id/${id}`,
    }),
  }),
});

export const { useGetAllGuestSpotsQuery, useGetGuestSpotByIdQuery } =
  detailsApi;
