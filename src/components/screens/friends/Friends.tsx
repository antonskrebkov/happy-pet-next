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
import { addNewFilter, addSort, paginate } from "@/store/querySlice";
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

  const [getFriends] = friendsAPI.useGetFriendsMutation();

  useEffect(() => {
    getFriends(queryParams)
      .unwrap()
      .then((res) => {
        setFriends(res.apiResponse);
        setTotalCount(res.totalCount);
        setTotalPages(getPagesQuantity(res.totalCount, 6));
      });
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

  const handleSortFriends = (newOption: IOption) => {
    dispatch(addSort(newOption.value));
    setIsQuerySubmitted(true);
  };

  const handleChangePage = (page: number) => {
    dispatch(paginate(page));
    setIsQuerySubmitted(true);
  };

  const breadcrumbs = [
    {
      link: "/",
      title: "Головна",
    },
    {
      link: "/friends",
      title: "Друзі",
    },
  ];

  return (
    <Layout
      title="Friends"
      description="Выбрать друга"
      keywords="Друзья, животные, питомцы"
    >
      <main className={styles.friends}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <FriendsChoose quantity={totalCount} />
        <FriendsFilter handle={handleFilterFriends} />
        <FriendsSort handle={handleSortFriends} />
        <FriendsCatalog friends={friends} />
        {totalCount > 6 ? (
          <FriendsPagination
            queryParams={queryParams}
            totalPages={totalPages}
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
