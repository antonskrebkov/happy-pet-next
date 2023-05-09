import { FC } from "react";
import styles from "./FriendsCatalog.module.scss";
import Image from "next/image";
import FriendItem from "../UI/friend-item/FriendItem";
import cart from "./images/cart.svg";
import { friendsAPI } from "@/services/Friends.service";

const FriendsCatalog: FC = () => {
  const { data: friends } = friendsAPI.useGetFriendsQuery("");

  return (
    <section className={styles.catalog}>
      <div className={styles.catalogContainer}>
        <div className={styles.catalogItems}>
          <div className={styles.catalogItems}>
            {friends &&
              friends.map((friend) => (
                <FriendItem key={friend.id} friend={friend}>
                  <div className={styles.itemFooterPrice}>{friend.price}</div>
                  <button className={styles.itemFooterAdd}>
                    <Image src={cart} alt="" />
                  </button>
                </FriendItem>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendsCatalog;
