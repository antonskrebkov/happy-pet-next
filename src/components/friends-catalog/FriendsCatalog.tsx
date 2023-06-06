import { FC } from "react";
import styles from "./FriendsCatalog.module.scss";
import Image from "next/image";
import FriendItem from "../UI/friend-item/FriendItem";
import { IFriend } from "@/interfaces/IFriend";
import Loader from "../UI/loader/Loader";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart } from "@/store/slices/cartSlice";
import { formatPrice } from "@/utils/price";

interface FriendsCatalogProps {
  friends: IFriend[] | undefined;
  isLoading: boolean;
}

const FriendsCatalog: FC<FriendsCatalogProps> = ({ friends, isLoading }) => {
  const dispatch = useAppDispatch();

  const cartList = useAppSelector((state) => state.cart);

  if (isLoading) {
    return (
      <div className={styles.catalogLoaderWrapper}>
        <Loader />
      </div>
    );
  }
  if (friends && friends.length === 0) {
    return (
      <h1 style={{ textAlign: "center", fontSize: "24px", margin: "50px 0" }}>
        Нічого не знайдено
      </h1>
    );
  }

  return (
    <section className={styles.catalog}>
      <div className={styles.catalogContainer}>
        <div className={styles.catalogItems}>
          {friends &&
            friends.map((friend) => (
              <FriendItem key={friend.id} friend={friend}>
                <div className={styles.itemFooterPrice}>
                  {formatPrice(friend.price)}
                </div>
                <button
                  className={
                    cartList.find((cartItem) => cartItem.id === friend.id)
                      ? `${styles.itemFooterAdd} ${styles.inCart}`
                      : styles.itemFooterAdd
                  }
                  onClick={() => dispatch(addToCart(friend))}
                ></button>
              </FriendItem>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FriendsCatalog;
