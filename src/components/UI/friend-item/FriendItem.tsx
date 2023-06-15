import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";
import wc from "public/wc.svg";
import styles from "./FriendItem.module.scss";
import { IFriend } from "@/interfaces/IFriend";

interface FriendItemProps extends PropsWithChildren {
  friend: IFriend;
  locale: string | undefined;
}

const FriendItem: FC<FriendItemProps> = ({ friend, locale, children }) => {
  return (
    <div className={styles.item}>
      <div className={styles.itemWrapper}>
        <div className={styles.itemHeader}>
          <div className={styles.itemHeaderTag}>
            <div className={styles.itemHeaderTagBadge}>
              <div className={styles.itemHeaderTagValue}>{friend.age}</div>
              <div className={styles.itemHeaderTagText}>
                {locale === "en" ? "months" : "місяців"}
              </div>
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
              {locale === "en" ? friend.name : friend.nameUA}
            </Link>
            <div className={styles.itemBodyInfoText}>
              {locale === "en"
                ? friend.shortDescription
                : friend.shortDescriptionUA}
            </div>
            <div className={styles.itemBodyInfoTags}>
              <div className={styles.itemBodyInfoTagsAnimal}>
                {locale === "en" ? friend.category : friend.categoryUA}
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
