import { FC } from "react";
import Image from "next/image";
import styles from "./ApplicationItem.module.scss";
import { IFriend } from "@/interfaces/IFriend";
import { formatPrice } from "@/utils/price";

interface ApplicationItemProps {
  friend: IFriend;
  locale: string | undefined;
}

const ApplicationItem: FC<ApplicationItemProps> = ({ friend, locale }) => {
  return (
    <li className={styles.orderItem}>
      <Image
        className={styles.orderItemImage}
        width={100}
        height={100}
        src={friend.images[0]}
        alt=""
      ></Image>
      <div className={styles.orderItemBody}>
        <div className={styles.orderItemTitle}>
          {locale === "en" ? friend.name : friend.nameUA}
        </div>
        <div className={styles.orderItemPrice}>
          {formatPrice(friend.price, locale)}
        </div>
      </div>
    </li>
  );
};
export default ApplicationItem;
