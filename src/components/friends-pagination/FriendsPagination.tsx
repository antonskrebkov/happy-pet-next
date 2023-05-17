import { FC } from "react";
import styles from "./FriendsPagination.module.scss";

import Image from "next/image";
import prev from "./images/arrow-left.svg";
import next from "./images/arrow-right.svg";
import IQuery from "@/interfaces/IQuery";

interface FriendsPaginationProps {
  queryParams: IQuery;
  totalPages: number;
  pagesArray: number[];
  handle: (page: number) => Promise<void>;
}

const FriendsPagination: FC<FriendsPaginationProps> = ({
  queryParams,
  totalPages,
  pagesArray,
  handle,
}) => {
  return (
    <section className={styles.pagination}>
      <div className={styles.paginationContainer}>
        <div className={styles.paginationItems}>
          <button
            className={
              queryParams.page === 1
                ? `${styles.paginationItem} ${styles.paginationItemDisabled}`
                : styles.paginationItem
            }
            onClick={
              queryParams.page === 1
                ? () => handle(1)
                : () => handle(queryParams.page - 1)
            }
          >
            <Image src={prev} alt="" />
          </button>
          {pagesArray.map((page: number) => (
            <button
              className={
                page === queryParams.page
                  ? `${styles.paginationItem} ${styles.paginationItemActive}`
                  : styles.paginationItem
              }
              key={page}
              onClick={() => handle(page)}
            >
              {page}
            </button>
          ))}
          <button
            className={
              queryParams.page === totalPages
                ? `${styles.paginationItem} ${styles.paginationItemDisabled}`
                : styles.paginationItem
            }
            onClick={
              queryParams.page === totalPages
                ? () => handle(totalPages)
                : () => handle(queryParams.page + 1)
            }
          >
            <Image src={next} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default FriendsPagination;
