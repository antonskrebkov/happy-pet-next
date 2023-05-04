import { FC } from "react";
import FilterSelect from "../UI/filter-select/FilterSelect";
import styles from "./FriendsFilter.module.scss";

const FriendsFilter: FC = () => {
  const kindOptions = [
    { value: "Черепаха", label: "Черепаха" },
    { value: "Кот", label: "Кот" },
    { value: "Кролик", label: "Кролик" },
    { value: "Собака", label: "Собака" },
    { value: "Обезьяна", label: "Обезьяна" },
    { value: "Попугай", label: "Попугай" },
  ];
  const sexOptions = [
    { value: "Мальчик", label: "Мальчик" },
    { value: "Девочка", label: "Девочка" },
  ];
  const ageOptions = [
    { value: "< 12 месяцев", label: "< 12 месяцев" },
    { value: "> 12 месяцев", label: "> 12 месяцев" },
  ];
  const wcOptions = [
    { value: "Да", label: "Да" },
    { value: "Нет", label: "Нет" },
  ];

  return (
    <section className={styles.filter}>
      <div className={styles.filterContainer}>
        <div className={styles.filterFriend}>
          <FilterSelect options={kindOptions} placeholder="Питомец" />
        </div>
        <div className={styles.filterFriend}>
          <FilterSelect options={sexOptions} placeholder="Пол" />
        </div>
        <div className={styles.filterFriend}>
          <FilterSelect options={ageOptions} placeholder="Возраст" />
        </div>
        <div className={styles.filterFriend}>
          <FilterSelect options={wcOptions} placeholder="Туалет" />
        </div>
      </div>
    </section>
  );
};

export default FriendsFilter;
