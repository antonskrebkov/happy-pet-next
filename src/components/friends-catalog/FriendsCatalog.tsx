import { FC } from "react";
import styles from "./FriendsCatalog.module.scss";
import FriendItem from "../UI/friend-item/FriendItem";
import { IFriend } from "@/interfaces/IFriend";
import DotsLoader from "../UI/dots-loader/DotsLoader";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart } from "@/store/slices/cartSlice";
import { formatPrice } from "@/utils/price";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
interface FriendsCatalogProps {
  friends: IFriend[] | undefined;
  isLoading: boolean;
}

const FriendsCatalog: FC<FriendsCatalogProps> = ({ friends, isLoading }) => {
  const { t } = useTranslation("friends");

  const { locale } = useRouter();

  const dispatch = useAppDispatch();

  const cartList = useAppSelector((state) => state.cart);

  if (isLoading) {
    return (
      <div className={styles.catalogLoaderWrapper}>
        <DotsLoader />
      </div>
    );
  }
  if (friends && friends.length === 0) {
    return (
      <div className={styles.catalogNothingFound}>{t("nothing-found")}</div>
    );
  }

  return (
    <section className={styles.catalog}>
      <div className={styles.catalogContainer}>
        <div className={styles.catalogItems}>
          {friends &&
            friends.map((friend) => (
              <FriendItem key={friend.id} friend={friend} locale={locale}>
                <div className={styles.itemFooterPrice}>
                  {formatPrice(friend.price, locale)}
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
