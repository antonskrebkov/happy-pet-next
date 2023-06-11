import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import remove from "public/remove.svg";
import styles from "./CheckoutItem.module.scss";
import { IFriend } from "@/interfaces/IFriend";
import { useAppDispatch } from "@/store/hooks";
import { removeFromCart } from "@/store/slices/cartSlice";
import { formatPrice } from "@/utils/price";

interface CheckoutItemProps {
  friend: IFriend;
}

const CheckoutItem: FC<CheckoutItemProps> = ({ friend }) => {
  const dispatch = useAppDispatch();

  return (
    <li className={styles.bagItem}>
      <Link className={styles.bagItemImage} href={"/friends/" + friend.id}>
        <Image src={friend.images[0]} width={140} height={140} alt="" />
      </Link>
      <div className={styles.bagItemBody}>
        <div className={styles.bagItemRow}>
          <Link className={styles.bagItemTitle} href={"/friends/" + friend.id}>
            {friend.name}
          </Link>
          <div className={styles.bagItemPrice}>{formatPrice(friend.price)}</div>
        </div>
        <div className={styles.bagItemId}>ID: {friend.id}</div>
        <div className={styles.bagItemKind}>Грызун</div>
        <div className={styles.bagItemAge}>3 месяца</div>
        <button
          className={styles.bagItemDelete}
          onClick={() => dispatch(removeFromCart(friend))}
        >
          <Image src={remove} alt=""></Image>
        </button>
      </div>
    </li>
  );
};

export default CheckoutItem;
