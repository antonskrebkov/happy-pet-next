import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IFriend } from "@/interfaces/IFriend";
import { ICategory } from "@/interfaces/ICategory";

export const friendsAPI = createApi({
  reducerPath: "friendsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64564f9d5f9a4f236140736d.mockapi.io",
  }),
  // tagTypes: ["Friends"],
  endpoints: (build) => ({
    getFriends: build.query<IFriend[], string>({
      query: () => "/friends",
      // providesTags: () => ["Friends"],
    }),
    getCategories: build.query<ICategory[], string>({
      query: () => "/categories",
      // providesTags: () => ["Friends"],
    }),
  }),
});

export const { useGetFriendsQuery, useGetCategoriesQuery } = friendsAPI;
