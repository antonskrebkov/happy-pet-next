import { FC } from "react";
import Select from "react-select";
import styles from "./FriendsSort.module.scss";

const FriendsSort: FC = () => {
  const sortOptions = [
    { value: "по новизне", label: "по новизне" },
    { value: "по возрастанию цены", label: "по возрастанию цены" },
    { value: "по убыванию цены", label: "по убыванию цены" },
  ];

  return (
    <section className={styles.sort}>
      <div className={styles.sortContainer}>
        <div className={styles.sortBody}>
          <div className={styles.sortLabel}>Сортировать</div>
          <Select
            styles={{
              valueContainer: () => ({
                display: "flex",
                width: "100%",
              }),
              control: () => ({
                cursor: "pointer",
                display: "flex",
                height: "16px",
              }),
              singleValue: () => ({
                fontSize: "13px",
                fontWeight: "700",
                paddingTop: "1px",
              }),
              indicatorSeparator: () => ({
                display: "none",
              }),
              dropdownIndicator: () => ({
                width: "16px",
                height: "20px",
              }),
              menu: () => ({
                position: "fixed",
                zIndex: 2,
                marginTop: 10,
              }),
              menuList: (baseStyles) => ({
                ...baseStyles,
                padding: 0,
                backgroundColor: "#fff",
                boxShadow: "0 0 9px rgba(89, 71, 38, 0.2)",
                borderRadius: "10px",
              }),
              option: () => ({
                fontSize: "13px",
                padding: "7px 5px",
                fontWeight: "400",
                transition: "background-color .2s",
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "rgba(0,0,0,0.1)",
                },
              }),
            }}
            isSearchable={false}
            options={sortOptions}
            defaultValue={sortOptions[0]}
          ></Select>
        </div>
      </div>
    </section>
  );
};

export default FriendsSort;
