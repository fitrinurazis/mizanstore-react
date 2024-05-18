import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://127.0.0.1:8080",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
      return headers;
    }
  },
});
endpoints: (builder) => ({
  getInfoMe: builder.query({
    query: () => ({
      url: "/info/me",
      method: "GET",
    }),
  }),
});
