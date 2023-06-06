import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IApplication } from "@/interfaces/IApplication";

export const applicationsAPI = createApi({
  reducerPath: "applicationsAPI",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://64564f9d5f9a4f236140736d.mockapi.io",
    baseUrl: "http://localhost:3002/applications",
  }),
  tagTypes: ["Applications"],
  endpoints: (build) => ({
    sendNewApplication: build.mutation({
      query: (application: IApplication) => ({
        url: "/",
        method: "POST",
        body: application,
      }),
      invalidatesTags: ["Applications"],
    }),
  }),
});

export const { useSendNewApplicationMutation } = applicationsAPI;
