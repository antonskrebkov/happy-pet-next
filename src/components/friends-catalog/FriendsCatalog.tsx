import { FC } from "react";
import styles from "./FriendsCatalog.module.scss";
import Image from "next/image";
import FriendItem from "../UI/friend-item/FriendItem";
import cart from "./images/cart.svg";
import { IFriend } from "@/interfaces/IFriend";
import querySlice from "@/store/querySlice";
import { useAppSelector } from "@/store/hooks";
interface FriendsCatalogProps {
  friends: IFriend[] | undefined;
}

const FriendsCatalog: FC<FriendsCatalogProps> = ({ friends }) => {
  const sortBy = useAppSelector((state) => state.query.sort.sortBy);
  const order = useAppSelector((state) => state.query.sort.order);

  return (
    <section className={styles.catalog}>
      <div className={styles.catalogContainer}>
        <div className={styles.catalogItems}>
          <div className={styles.catalogItems}>
            {friends?.length === 0 ? (
              <h1 style={{ textAlign: "center", fontSize: "24px" }}>
                Нічого не знайдено
              </h1>
            ) : (
              friends &&
              friends.map((friend) => (
                <FriendItem key={friend.id} friend={friend}>
                  <div className={styles.itemFooterPrice}>{friend.price}</div>
                  <button className={styles.itemFooterAdd}>
                    <Image src={cart} alt="" />
                  </button>
                </FriendItem>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendsCatalog;
