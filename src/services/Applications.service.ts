import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IApplication } from "@/interfaces/IApplication";

export const applicationsAPI = createApi({
  reducerPath: "applicationsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://648077e2f061e6ec4d4955d9.mockapi.io/applications",
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
