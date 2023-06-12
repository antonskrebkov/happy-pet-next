import { FC } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./HomeChoise.module.scss";
import icon1 from "public/choise-01.svg";
import icon2 from "public/choise-02.svg";
import icon3 from "public/choise-03.svg";
import { useTranslation } from "next-i18next";

interface IChoiseItem {
  id: number;
  src: StaticImageData;
  title: string;
  text: string;
}

const HomeChoise: FC = () => {
  const { t } = useTranslation("home");

  const choiseItems: IChoiseItem[] = [
    {
      id: 1,
      src: icon1,
      title: t("choise-item-title-1"),
      text: t("choise-item-text-1"),
    },
    {
      id: 2,
      src: icon2,
      title: t("choise-item-title-2"),
      text: t("choise-item-text-2"),
    },
    {
      id: 3,
      src: icon3,
      title: t("choise-item-title-3"),
      text: t("choise-item-text-3"),
    },
  ];

  return (
    <section className={styles.choise}>
      <div className={styles.choiseContainer}>
        <h2 className={styles.choiseTitle}>{t("choise-title")}</h2>
        <ul className={styles.choiseItems}>
          {choiseItems.map((choiseItem) => (
            <li key={choiseItem.id} className={styles.choiseItem}>
              <Image
                className={styles.choiseItemImg}
                src={choiseItem.src}
                alt=""
              />
              <div className={styles.choiseItemBody}>
                <div className={styles.choiseItemTitle}>{choiseItem.title}</div>
                <div className={styles.choiseItemText}>{choiseItem.text}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomeChoise;
