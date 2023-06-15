import { FC } from "react";
import FilterSelect from "../UI/filter-select/FilterSelect";
import styles from "./FriendsFilter.module.scss";
import IQuery, { IFilter } from "@/interfaces/IQuery";
import { useTranslation } from "next-i18next";

interface FriendsFilterProps {
  handle: (newOption: IFilter) => void;
  handleReset: () => void;
  queryParams: IQuery;
}

const FriendsFilter: FC<FriendsFilterProps> = ({
  handle,
  handleReset,
  queryParams,
}) => {
  const { t } = useTranslation("friends");

  const categoryOptions = [
    { value: "reptile", label: t("filter-category-1") },
    { value: "cat", label: t("filter-category-2") },
    { value: "rodent", label: t("filter-category-3") },
    { value: "dog", label: t("filter-category-4") },
    { value: "monkey", label: t("filter-category-5") },
    { value: "parrot", label: t("filter-category-6") },
  ];
  const sexOptions = [
    { value: "male", label: t("filter-sex-1") },
    { value: "female", label: t("filter-sex-2") },
  ];
  const ageOptions = [
    { value: "< 12 месяцев", label: t("filter-age-1") },
    { value: "> 12 месяцев", label: t("filter-age-2") },
  ];
  const wcOptions = [
    { value: "true", label: t("filter-wc-1") },
    { value: "false", label: t("filter-wc-2") },
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
            placeholder={t("filter-category-placeholder")}
            handle={handle}
          />
        </div>
        <div className={styles.filterFriend}>
          <FilterSelect
            name="sex"
            options={sexOptions}
            placeholder={t("filter-sex-placeholder")}
            handle={handle}
          />
        </div>
        <div className={styles.filterFriend}>
          <FilterSelect
            name="age"
            options={ageOptions}
            placeholder={t("filter-age-placeholder")}
            handle={handle}
          />
        </div>
        <div className={styles.filterFriend}>
          <FilterSelect
            name="wc"
            options={wcOptions}
            placeholder={t("filter-wc-placeholder")}
            handle={handle}
          />
        </div>
        {queryParams.filter.length > 0 && (
          <button className={styles.filterReset} onClick={resetAndClear}>
            Скасувати
          </button>
        )}
      </div>
    </section>
  );
};

export default FriendsFilter;
