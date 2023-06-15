import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import remove from "public/remove.svg";
import styles from "./CheckoutItem.module.scss";
import { IFriend } from "@/interfaces/IFriend";
import { useAppDispatch } from "@/store/hooks";
import { removeFromCart } from "@/store/slices/cartSlice";
import { formatPrice } from "@/utils/price";
import { useTranslation } from "next-i18next";
import { capitalize } from "@/utils/categories";

interface CheckoutItemProps {
  friend: IFriend;
  locale: string | undefined;
}

const CheckoutItem: FC<CheckoutItemProps> = ({ friend, locale }) => {
  const { t } = useTranslation("checkout");

  const dispatch = useAppDispatch();

  return (
    <li className={styles.bagItem}>
      <Link className={styles.bagItemImage} href={"/friends/" + friend.id}>
        <Image src={friend.images[0]} width={140} height={140} alt="" />
      </Link>
      <div className={styles.bagItemBody}>
        <div className={styles.bagItemRow}>
          <Link className={styles.bagItemTitle} href={"/friends/" + friend.id}>
            {locale === "en" ? friend.name : friend.nameUA}
          </Link>
          <div className={styles.bagItemPrice}>
            {formatPrice(friend.price, locale)}
          </div>
        </div>
        <div className={styles.bagItemId}>ID: {friend.id}</div>
        <div className={styles.bagItemKind}>
          {capitalize(locale === "en" ? friend.category : friend.categoryUA)}
        </div>
        <div className={styles.bagItemAge}>
          {friend.age}
          {t("bag-item-age")}
        </div>
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
