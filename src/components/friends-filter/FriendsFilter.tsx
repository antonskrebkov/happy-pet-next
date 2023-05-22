import { FC } from "react";
import FilterSelect from "../UI/filter-select/FilterSelect";
import styles from "./FriendsFilter.module.scss";
import { IFilter } from "@/interfaces/IQuery";

interface FriendsFilterProps {
  handle: (newOption: IFilter) => void;
}

const FriendsFilter: FC<FriendsFilterProps> = ({ handle }) => {
  const kindOptions = [
    { value: "reptile", label: "Рептилии" },
    { value: "cat", label: "Коты" },
    { value: "rodent", label: "Грызуны" },
    { value: "dog", label: "Собаки" },
    { value: "monkey", label: "Обезьяны" },
    { value: "parrot", label: "Попугаи" },
  ];
  const sexOptions = [
    { value: "male", label: "Мальчик" },
    { value: "female", label: "Девочка" },
  ];
  const ageOptions = [
    { value: "< 12 месяцев", label: "< 12 месяцев" },
    { value: "> 12 месяцев", label: "> 12 месяцев" },
  ];
  const wcOptions = [
    { value: "true", label: "Да" },
    { value: "false", label: "Нет" },
  ];

  return (
    <section className={styles.filter}>
      <div className={styles.filterContainer}>
        <div className={styles.filterFriend}>
          <FilterSelect
            name="category"
            options={kindOptions}
            placeholder="Питомец"
            handle={handle}
          />
        </div>
        <div className={styles.filterFriend}>
          <FilterSelect
            name="sex"
            options={sexOptions}
            placeholder="Пол"
            handle={handle}
          />
        </div>
        <div className={styles.filterFriend}>
          <FilterSelect
            name="age"
            options={ageOptions}
            placeholder="Возраст"
            handle={handle}
          />
        </div>
        <div className={styles.filterFriend}>
          <FilterSelect
            name="wc"
            options={wcOptions}
            placeholder="Туалет"
            handle={handle}
          />
        </div>
      </div>
    </section>
  );
};

export default FriendsFilter;
