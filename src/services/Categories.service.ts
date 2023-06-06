import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICategory } from "@/interfaces/ICategory";

export const categoriesAPI = createApi({
  reducerPath: "categoriesAPI",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://64564f9d5f9a4f236140736d.mockapi.io",
    baseUrl: "http://localhost:3002/categories",
  }),
  endpoints: (build) => ({
    getCategories: build.query<ICategory[], string>({
      query: () => "/",
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesAPI;
