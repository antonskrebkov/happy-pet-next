import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IQuestion } from "@/interfaces/IQuestion";

export const questionsAPI = createApi({
  reducerPath: "questionsAPI",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://64564f9d5f9a4f236140736d.mockapi.io",
    baseUrl: "http://localhost:3002/questions",
  }),
  tagTypes: ["Questions"],
  endpoints: (build) => ({
    sendNewQuestion: build.mutation({
      query: (question: IQuestion) => ({
        url: "/",
        method: "POST",
        body: question,
      }),
      invalidatesTags: ["Questions"],
    }),
  }),
});

export const { useSendNewQuestionMutation } = questionsAPI;
