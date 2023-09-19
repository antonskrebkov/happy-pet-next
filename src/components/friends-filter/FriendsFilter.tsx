import { FC } from "react";
import FilterSelect from "../UI/filter-select/FilterSelect";
import styles from "./FriendsFilter.module.scss";
import IQuery, { IFilter } from "@/interfaces/IQuery";
import { useTranslation } from "next-i18next";
import { ICategory } from "@/interfaces/ICategory";
import { capitalize, capitalizeInPlural } from "@/utils/categories";
import { useRouter } from "next/router";

interface FriendsFilterProps {
  handle: (newOption: IFilter) => void;
  handleReset: () => void;
  queryParams: IQuery;
  categories: ICategory[];
}

const FriendsFilter: FC<FriendsFilterProps> = ({
  handle,
  handleReset,
  queryParams,
  categories,
}) => {
  const { t } = useTranslation("friends");
  const { locale } = useRouter();

  const generateCategoriesOptions = () => {
    const generatedCategoriesOptions = [];
    for (let i = 0; i < categories.length; i++) {
      generatedCategoriesOptions.push({
        value: categories[i].titleEN,
        label:
          locale === "en"
            ? capitalizeInPlural(categories[i].titleEN)
            : capitalize(categories[i].titleUA),
      });
    }
    return generatedCategoriesOptions;
  };

  const sexOptions = [
    { value: "male", label: t("filter-sex-1") },
    { value: "female", label: t("filter-sex-2") },
  ];
  const ageOptions = [
    { value: "kid", label: t("filter-age-1") },
    { value: "adult", label: t("filter-age-2") },
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
            options={generateCategoriesOptions()}
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
            name="ageStatus"
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
