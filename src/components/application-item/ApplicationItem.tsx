import { FC } from "react";
import Image from "next/image";
import styles from "./ApplicationItem.module.scss";
import { IFriend } from "@/interfaces/IFriend";
import { formatPrice } from "@/utils/price";
import { useRouter } from "next/router";

interface ApplicationItemProps {
  friend: IFriend;
}

const ApplicationItem: FC<ApplicationItemProps> = ({ friend }) => {
  const { locale } = useRouter();

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
        <div className={styles.orderItemTitle}>{friend.name}</div>
        <div className={styles.orderItemPrice}>
          {formatPrice(friend.price, locale)}
        </div>
      </div>
    </li>
  );
};
export default ApplicationItem;
