import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICategory } from "@/interfaces/ICategory";

export const categoriesAPI = createApi({
  reducerPath: "categoriesAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64807757f061e6ec4d4954e4.mockapi.io/categories",
    // baseUrl: "http://localhost:3002/categories",
  }),
  endpoints: (build) => ({
    getCategories: build.query<ICategory[], string>({
      query: () => "/",
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesAPI;
