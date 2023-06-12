import { FC, Dispatch, SetStateAction, useEffect } from "react";
import Select from "react-select";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import styles from "./FriendsSort.module.scss";
import { addSort } from "@/store/slices/querySlice";
import { friendsAPI } from "@/services/Friends.service";
import { IFriend } from "@/interfaces/IFriend";
import { IOption } from "@/interfaces/IOption";
import { useTranslation } from "next-i18next";
interface FriendsSortProps {
  handle: (newOption: IOption) => void;
}

const FriendsSort: FC<FriendsSortProps> = ({ handle }) => {
  const { t } = useTranslation("friends");

  const sortOptions = [
    { value: { sortBy: "id", order: "desc" }, label: t("sort-label-1") },
    { value: { sortBy: "price", order: "asc" }, label: t("sort-label-2") },
    { value: { sortBy: "price", order: "desc" }, label: t("sort-label-3") },
  ];

  return (
    <section className={styles.sort}>
      <div className={styles.sortContainer}>
        <div className={styles.sortBody}>
          <div className={styles.sortLabel}>{t("sort-label")}</div>
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
                position: "absolute",
                zIndex: 1,
                marginTop: 10,
                width: "180px",
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
            onChange={(option: IOption) => handle(option)}
          ></Select>
        </div>
      </div>
    </section>
  );
};

export default FriendsSort;
