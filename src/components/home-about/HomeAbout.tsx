import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./HomeAbout.module.scss";
import about from "public/about.jpeg";
import { useTranslation } from "next-i18next";

const HomeAbout: FC = () => {
  const { t } = useTranslation("home");

  return (
    <section className={styles.about}>
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle}>{t("about-title")}</h2>
        <div className={styles.aboutBody}>
          <div className={styles.aboutDescription}>
            <h3 className={styles.aboutDescriptionTitle}>
              {t("about-description-title")}
            </h3>
            <div className={styles.aboutDescriptionText}>
              <p>{t("about-description-text-1")}</p>
              <p>{t("about-description-text-2")}</p>
            </div>
            <Link href="/about" className={styles.aboutDescriptionLink}>
              {t("about-description-link")}
            </Link>
          </div>
          <div className={styles.aboutImg}>
            <Image src={about} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
