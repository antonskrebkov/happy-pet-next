import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import pets from "./images/pets.png";
import styles from "./HomeMain.module.scss";

const HomeMain: FC = () => {
  return (
    <section className={styles.mainBlock}>
      <div className={styles.mainBlockContainer}>
        <div className={styles.mainBlockItem}>
          <h2 className={styles.mainBlockTitle}>
            Твой новый друг с доставкой на дом
          </h2>
          <div className={styles.mainBlockText}>
            Онлайн-магазин домашних животных подарит тебе нового друга в
            несколько кликов. Действуй!
          </div>
          <Link href="/friends" className={styles.mainBlockButton}>
            Посмотреть друзей
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
