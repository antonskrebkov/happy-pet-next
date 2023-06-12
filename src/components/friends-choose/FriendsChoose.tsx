import { FC } from "react";
import styles from "./FriendsChoose.module.scss";
import { useTranslation } from "next-i18next";
interface FriendsChooseProps {
  quantity: number | undefined;
}

const FriendsChoose: FC<FriendsChooseProps> = ({ quantity }) => {
  const { t } = useTranslation("friends");
  return (
    <section className={styles.choose}>
      <div className={styles.chooseContainer}>
        <h1 className={styles.chooseTitle}>{t("choose-title")}</h1>
        <div className={styles.chooseQuantity}>
          {t("choose-quantity")}
          <span>{quantity}</span>
        </div>
      </div>
    </section>
  );
};

export default FriendsChoose;
