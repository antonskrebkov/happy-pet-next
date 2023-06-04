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
import IQuery, { IFilter } from "@/interfaces/IQuery";
import { IOption } from "@/interfaces/IOption";
import { getPagesQuantity } from "@/utils/pages";
import styles from "./Friends.module.scss";
import { IFriend } from "@/interfaces/IFriend";

const Friends: FC = () => {
  const [friends, setFriends] = useState<IFriend[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isQuerySubmitted, setIsQuerySubmitted] = useState(false);

  const dispatch = useAppDispatch();
  const queryParams = useAppSelector((state) => state.query);

  const [getFriends, { isLoading }] = friendsAPI.useGetFriendsMutation();

  useEffect(() => {
    getFriends(queryParams)
      .unwrap()
      .then((res) => {
        setFriends(res.apiResponse);
        setTotalCount(res.totalCount);
        setTotalPages(getPagesQuantity(res.totalCount, 6));
      });
    return () => {
      dispatch(addSort({ sortBy: "id", order: "desc" }));
      dispatch(resetFilter());
      dispatch(paginate(1));
    };
  }, []);

  useEffect(() => {
    if (isQuerySubmitted) {
      getFriends(queryParams)
        .unwrap()
        .then((res) => {
          setFriends(res.apiResponse);
          setTotalCount(res.totalCount);
          setTotalPages(getPagesQuantity(res.totalCount, 6));
        });
      setIsQuerySubmitted(false);
    }
  }, [queryParams, isQuerySubmitted, getFriends]);

  const handleFilterFriends = (newFilter: IFilter) => {
    dispatch(addNewFilter(newFilter));
    dispatch(paginate(1));
    setIsQuerySubmitted(true);
  };

  const handleResetFilter = () => {
    dispatch(resetFilter());
    setIsQuerySubmitted(true);
  };

  const handleSortFriends = (newOption: IOption) => {
    dispatch(addSort(newOption.value));
    dispatch(paginate(1));
    setIsQuerySubmitted(true);
  };

  const handleChangePage = (page: number) => {
    dispatch(paginate(page));
    setIsQuerySubmitted(true);
  };

  return (
    <Layout
      title="Friends"
      description="Выбрать друга"
      keywords="Друзья, животные, питомцы"
    >
      <main className={styles.friends}>
        <Breadcrumbs />
        <FriendsChoose quantity={totalCount} />
        <FriendsFilter
          handle={handleFilterFriends}
          handleReset={handleResetFilter}
          queryParams={queryParams}
        />
        <FriendsSort handle={handleSortFriends} />
        <FriendsCatalog friends={friends} isLoading={isLoading} />
        {totalCount > 6 ? (
          <FriendsPagination
            queryParams={queryParams}
            totalPages={totalPages}
            isLoading={isLoading}
            handle={handleChangePage}
          />
        ) : (
          ""
        )}
      </main>
    </Layout>
  );
};

export default Friends;
