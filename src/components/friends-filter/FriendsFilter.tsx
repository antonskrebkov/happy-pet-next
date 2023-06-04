import { FC, useRef, useState } from "react";
import FilterSelect from "../UI/filter-select/FilterSelect";
import styles from "./FriendsFilter.module.scss";
import IQuery, { IFilter } from "@/interfaces/IQuery";

interface FriendsFilterProps {
  handle: (newOption: IFilter) => void;
  handleReset: () => void;
  queryParams: IQuery;
}

interface IOption {
  value: string;
  label: string;
}

const FriendsFilter: FC<FriendsFilterProps> = ({
  handle,
  handleReset,
  queryParams,
}) => {
  const categoryOptions = [
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

  const resetAndClear = () => {
    handleReset();
  };

  return (
    <section className={styles.filter}>
      <div className={styles.filterContainer}>
        <div className={styles.filterFriend}>
          <FilterSelect
            name="category"
            options={categoryOptions}
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
        {queryParams.filter.length ? (
          <button className={styles.filterReset} onClick={resetAndClear}>
            Скасувати
          </button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default FriendsFilter;
