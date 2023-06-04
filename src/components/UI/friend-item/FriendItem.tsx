import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";
import wc from "./images/wc.svg";
import styles from "./FriendItem.module.scss";

interface IFriend {
  id: number;
  age: number;
  name: string;
  shortDescription: string;
  description: string;
  category: string;
  price: number;
  sex: string;
  wc: boolean;
  images: string[];
}

interface FriendItemProps extends PropsWithChildren {
  friend: IFriend;
}

const FriendItem: FC<FriendItemProps> = ({ friend, children }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemWrapper}>
        <div className={styles.itemHeader}>
          <div className={styles.itemHeaderTag}>
            <div className={styles.itemHeaderTagBadge}>
              <div className={styles.itemHeaderTagValue}>{friend.age}</div>
              <div className={styles.itemHeaderTagText}>месяцев</div>
            </div>
          </div>
          <div
            className={
              friend.wc
                ? `${styles.itemHeaderWc} ${styles.itemHeaderWcGreen}`
                : `${styles.itemHeaderWc} ${styles.itemHeaderWcRed}`
            }
          >
            <Image src={wc} alt="" />
          </div>
        </div>
        <div className={styles.itemBody}>
          <Link href={"friends/" + friend.id}>
            <Image
              src={friend.images[0]}
              width={248}
              height={248}
              alt=""
              className={styles.itemBodyImg}
            />
          </Link>
          <div className={styles.itemBodyInfo}>
            <Link
              href={"friends/" + friend.id}
              className={styles.itemBodyInfoTitle}
            >
              {friend.name}
            </Link>
            <div className={styles.itemBodyInfoText}>
              {friend.shortDescription}
            </div>
            <div className={styles.itemBodyInfoTags}>
              <div className={styles.itemBodyInfoTagsAnimal}>
                {friend.category}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.itemFooter}>{children}</div>
    </div>
  );
};
export default FriendItem;
