import { FC, useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import FriendsChoose from "@/components/friends-choose/FriendsChoose";
import FriendsFilter from "@/components/friends-filter/FriendsFilter";
import FriendsSort from "@/components/friends-sort/FriendsSort";
import FriendsCatalog from "@/components/friends-catalog/FriendsCatalog";
import FriendsPagination from "@/components/friends-pagination/FriendsPagination";
import { friendsAPI } from "@/services/Friends.service";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addNewFilter,
  addSort,
  paginate,
  resetFilter,
} from "@/store/slices/querySlice";
import { IFilter } from "@/interfaces/IQuery";
import { IOption } from "@/interfaces/IOption";
import { getPagesQuantity } from "@/utils/pages";
import styles from "./Friends.module.scss";
import { IFriend } from "@/interfaces/IFriend";
import { useTranslation } from "next-i18next";
import { ICategory } from "@/interfaces/ICategory";

interface FriendsProps {
  data: IFriend[];
  totalFriends: IFriend[];
  categories: ICategory[];
}

const Friends: FC<FriendsProps> = ({ data, totalFriends, categories }) => {
  const { t } = useTranslation("friends");

  const [friends, setFriends] = useState<IFriend[]>(data);
  const [totalCount, setTotalCount] = useState<number>(totalFriends.length);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isQuerySubmitted, setIsQuerySubmitted] = useState(false);

  const dispatch = useAppDispatch();
  const queryParams = useAppSelector((state) => state.query);

  const [getFriends, { isLoading }] = friendsAPI.useGetFriendsMutation();
  const [getAllFriends] = friendsAPI.useGetAllFriendsMutation();

  useEffect(() => {
    // setTotalCount(res.totalCount);
    // setTotalPages(getPagesQuantity(res.totalCount, 6));
    setTotalPages(getPagesQuantity(totalFriends.length, 6));
    return () => {
      dispatch(addSort({ sortBy: "id", order: "desc" }));
      dispatch(resetFilter());
      dispatch(paginate(1));
    };
  }, []);

  useEffect(() => {
    if (isQuerySubmitted) {
      getAllFriends(queryParams)
        .unwrap()
        .then((res) => {
          setTotalCount(res.apiResponse.length);
          setTotalPages(getPagesQuantity(res.apiResponse.length, 6));
        });
      getFriends(queryParams)
        .unwrap()
        .then((res) => {
          setFriends(res.apiResponse);
          // setTotalCount(res.totalCount);
          // setTotalPages(getPagesQuantity(res.totalCount, 6));
        });
      setIsQuerySubmitted(false);
    }
  }, [queryParams, isQuerySubmitted, getFriends, getAllFriends]);

  const handleFilterFriends = (newFilter: IFilter) => {
    dispatch(addNewFilter(newFilter));
    dispatch(paginate(1));
    setIsQuerySubmitted(true);
  };

  const handleResetFilter = () => {
    dispatch(resetFilter());
    dispatch(paginate(1));
    setIsQuerySubmitted(true);
    setTotalCount(totalFriends.length);
    getPagesQuantity(totalFriends.length, 6);
  };

  const handleSortFriends = (newOption: IOption | null) => {
    dispatch(addSort(newOption!.value));
    dispatch(paginate(1));
    setIsQuerySubmitted(true);
  };

  const handleChangePage = (page: number) => {
    dispatch(paginate(page));
    setIsQuerySubmitted(true);
  };

  return (
    <Layout
      title={t("title")}
      description={`${t("description")}`}
      keywords={`${t("keywords")}`}
    >
      <main className={styles.friends}>
        <Breadcrumbs />
        <FriendsChoose quantity={totalCount} />
        <FriendsFilter
          handle={handleFilterFriends}
          handleReset={handleResetFilter}
          queryParams={queryParams}
          categories={categories}
        />
        <FriendsSort handle={handleSortFriends} />
        <FriendsCatalog friends={friends} isLoading={isLoading} />
        {totalCount > 6 && (
          <FriendsPagination
            queryParams={queryParams}
            totalPages={totalPages}
            isLoading={isLoading}
            handle={handleChangePage}
          />
        )}
      </main>
    </Layout>
  );
};

export default Friends;
