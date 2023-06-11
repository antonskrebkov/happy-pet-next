import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IQuestion } from "@/interfaces/IQuestion";

export const questionsAPI = createApi({
  reducerPath: "questionsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://648077e2f061e6ec4d4955d9.mockapi.io/questions",
    // baseUrl: `${process.env.API_HOST}/questions`,
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
