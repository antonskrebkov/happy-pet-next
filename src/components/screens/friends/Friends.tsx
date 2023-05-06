import { FC } from "react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import FriendsChoose from "@/components/friends-choose/FriendsChoose";
import FriendsFilter from "@/components/friends-filter/FriendsFilter";
import FriendsSort from "@/components/friends-sort/FriendsSort";
import FriendsCatalog from "@/components/friends-catalog/FriendsCatalog";
import styles from "./Friends.module.scss";

const Friends: FC = () => {
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
        <FriendsChoose />
        <FriendsFilter />
        <FriendsSort />
        <FriendsCatalog />
      </main>
    </Layout>
  );
};

export default Friends;
