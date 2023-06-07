import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IFriend } from "@/interfaces/IFriend";
import IQuery from "@/interfaces/IQuery";

export const friendsAPI = createApi({
  reducerPath: "friendsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64807757f061e6ec4d4954e4.mockapi.io/friends",
    // baseUrl: "http://localhost:3002/friends",
  }),
  tagTypes: ["Friends"],
  endpoints: (build) => ({
    getNewestFriends: build.query<IFriend[], void>({
      // query: () => `?_sort=id&_order=desc&_page=1&_limit=6`,
      query: () => `?sortBy=id&order=desc&page=1&limit=6`,
    }),
    getFriends: build.mutation<
      { apiResponse: IFriend[]; totalCount: number },
      IQuery
    >({
      query: ({ filter, sort, page }) =>
        // `?_sort=${sort.sortBy}&_order=${sort.order}${
        //   filter.length
        //     ? filter
        //         .map((filterItem) => `&${filterItem.key}=${filterItem.value}`)
        //         .join("")
        //     : ""
        // }&_page=${page}&_limit=6`,
        `${
          filter.length
            ? filter
                .map((filterItem) => `?${filterItem.key}=${filterItem.value}`)
                .join("")
            : ""
        }${filter.length ? "&" : "?"}sortBy=${sort.sortBy}&order=${
          sort.order
        }&page=${page}&limit=6`,
      transformResponse(apiResponse: IFriend[], meta, arg) {
        return {
          apiResponse,
          totalCount: Number(meta?.response?.headers.get("X-Total-Count")),
          arg,
        };
      },
      invalidatesTags: ["Friends"],
    }),
    // getFriendsByCategory: build.mutation<IFriend, string>({
    //   query: (id) => `/friends/${id}`,
    // }),
    getFriend: build.query<IFriend, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const {
  useGetNewestFriendsQuery,
  useGetFriendsMutation,
  useGetFriendQuery,
} = friendsAPI;
