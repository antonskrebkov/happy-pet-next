import { FC } from "react";
import styles from "./FriendsChoose.module.scss";

interface FriendsChooseProps {
  quantity: number | undefined;
}

const FriendsChoose: FC<FriendsChooseProps> = ({ quantity }) => {
  return (
    <section className={styles.choose}>
      <div className={styles.chooseContainer}>
        <h1 className={styles.chooseTitle}>Выбрать друга</h1>
        <div className={styles.chooseQuantity}>
          Количество животных: <span>{quantity}</span>
        </div>
      </div>
    </section>
  );
};

export default FriendsChoose;
