import { FC } from "react";
import styles from "./FriendsChoose.module.scss";

const FriendsChoose: FC = () => {
  return (
    <section className={styles.choose}>
      <div className={styles.chooseContainer}>
        <h1 className={styles.chooseTitle}>Выбрать друга</h1>
        <div className={styles.chooseQuantity}>
          Количество животных: <span>0</span>
        </div>
      </div>
    </section>
  );
};

export default FriendsChoose;
