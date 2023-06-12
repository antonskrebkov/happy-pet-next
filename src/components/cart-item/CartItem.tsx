import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./CartItem.module.scss";
import deleteIcon from "public/delete.svg";
import { useAppDispatch } from "@/store/hooks";
import { IFriend } from "@/interfaces/IFriend";
import { removeFromCart } from "@/store/slices/cartSlice";
import { capitalize } from "@/utils/categories";
import { formatPrice } from "@/utils/price";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

interface CartItemProps {
  friend: IFriend;
}

const CartItem: FC<CartItemProps> = ({ friend }) => {
  const dispatch = useAppDispatch();

  const { t } = useTranslation("layout");

  const { locale } = useRouter();

  const handleDelete = (friend: IFriend) => {
    dispatch(removeFromCart(friend));
  };

  return (
    <li className={styles.cartItem}>
      <Link href={"friends/" + friend.id} className={styles.cartItemImage}>
        <Image width={90} height={90} src={friend.images[0]} alt="" />
      </Link>
      <div className={styles.cartItemContent}>
        <Link href={"friends/" + friend.id} className={styles.cartItemTitle}>
          {friend.name}
        </Link>
        <div className={styles.cartItemId}>
          ID: <span>{friend.id}</span>
        </div>
        <div className={styles.cartItemInfo}>
          <div className={styles.cartItemKind}>
            {capitalize(friend.category)}
          </div>
          <div className={styles.cartItemAge}>
            <span>{friend.age}</span>
            {t("cart-month")}
          </div>
        </div>
        <div className={styles.cartItemPrice}>
          {formatPrice(friend.price, locale)}
        </div>
      </div>
      <button
        className={styles.cartItemDelete}
        onClick={() => handleDelete(friend)}
      >
        <Image src={deleteIcon} alt="" />
      </button>
    </li>
  );
};

export default CartItem;
