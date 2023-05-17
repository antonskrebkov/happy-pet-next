import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/dist/query/react";
import { IFriend } from "@/interfaces/IFriend";
import { ICategory } from "@/interfaces/ICategory";
import IQuery from "@/interfaces/IQuery";

export const friendsAPI = createApi({
  reducerPath: "friendsAPI",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://64564f9d5f9a4f236140736d.mockapi.io",
    baseUrl: "http://localhost:3002",
  }),
  tagTypes: ["Friends"],
  endpoints: (build) => ({
    getNewestFriends: build.query<IFriend[], void>({
      query: () => `/friends?_sort=id&_order=desc&_page=1&_limit=6`,
      // `/friends?sortBy=${sortBy}&order=${order}&page=${page}&limit=${limit}`
    }),
    getFriends: build.mutation<
      { apiResponse: IFriend[]; totalCount: number },
      IQuery
    >({
      query: ({ filter, sort, page }) =>
        `/friends${`?_sort=${sort.sortBy}&_order=${sort.order}&_page=${page}&_limit=6`}`,
      transformResponse(apiResponse: IFriend[], meta, arg) {
        return {
          apiResponse,
          totalCount: Number(meta?.response?.headers.get("X-Total-Count")),
          arg,
        };
      },
      invalidatesTags: ["Friends"],
    }),
    getCategories: build.query<ICategory[], string>({
      query: () => "/categories",
      // providesTags: () => ["Friends"],
    }),
  }),
});

export const {
  useGetNewestFriendsQuery,
  useGetFriendsMutation,
  useGetCategoriesQuery,
} = friendsAPI;
