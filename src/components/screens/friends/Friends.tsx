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
import { addSort } from "@/store/querySlice";
import { paginate } from "@/store/querySlice";
import IQuery from "@/interfaces/IQuery";
import { IOption } from "@/interfaces/IOption";
import { getPagesQuantity } from "@/utils/pages";
import styles from "./Friends.module.scss";
import { IFriend } from "@/interfaces/IFriend";
import { usePagination } from "@/hooks/usePagination";

const Friends: FC = () => {
  const [friends, setFriends] = useState<IFriend[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);

  const dispatch = useAppDispatch();
  const queryParams = useAppSelector((state) => state.query);

  const [getFriends] = friendsAPI.useGetFriendsMutation();

  const pagesArray = usePagination(totalPages);

  useEffect(() => {
    getFriends(queryParams)
      .unwrap()
      .then((res) => {
        setFriends(res.apiResponse);
        setTotalCount(res.totalCount);
        setTotalPages(getPagesQuantity(res.totalCount, 6));
      });
  }, []);

  const handleSortFriends = async (newOption: IOption) => {
    dispatch(addSort(newOption.value));
    await getFriends({ ...queryParams, sort: newOption.value })
      .unwrap()
      .then((res) => {
        setFriends(res.apiResponse);
      });
  };

  const handleChangePage = async (page: number) => {
    dispatch(paginate(page));
    await setTimeout(
      () =>
        getFriends({ ...queryParams, page })
          .unwrap()
          .then((res) => setFriends(res.apiResponse)),
      0
    );
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
        <FriendsFilter />
        <FriendsSort handle={handleSortFriends} />
        <FriendsCatalog friends={friends} />
        <FriendsPagination
          queryParams={queryParams}
          totalPages={totalPages}
          pagesArray={pagesArray}
          handle={handleChangePage}
        />
      </main>
    </Layout>
  );
};

export default Friends;
