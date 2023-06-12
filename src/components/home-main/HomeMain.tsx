import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import pets from "public/pets.png";
import styles from "./HomeMain.module.scss";
import { useTranslation } from "next-i18next";

const HomeMain: FC = () => {
  const { t } = useTranslation("home");

  return (
    <section className={styles.mainBlock}>
      <div className={styles.mainBlockContainer}>
        <div className={styles.mainBlockItem}>
          <h2 className={styles.mainBlockTitle}>{t("main-block-title")}</h2>
          <div className={styles.mainBlockText}>{t("main-block-text")}</div>
          <Link href="/friends" className={styles.mainBlockButton}>
            {t("main-block-button")}
          </Link>
        </div>
        <div className={styles.mainBlockImg}>
          <Image src={pets} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
