import { FC } from "react";
import IQuery from "@/interfaces/IQuery";
import styles from "./FriendsPagination.module.scss";

import { usePagination } from "@/hooks/usePagination";
interface FriendsPaginationProps {
  queryParams: IQuery;
  totalPages: number;
  isLoading: boolean;
  handle: (page: number) => void;
}

const FriendsPagination: FC<FriendsPaginationProps> = ({
  queryParams,
  totalPages,
  isLoading,
  handle,
}) => {
  const pagesArray = usePagination(totalPages);

  if (isLoading) {
    return null;
  }

  return (
    <section className={styles.pagination}>
      <div className={styles.paginationContainer}>
        <div className={styles.paginationItems}>
          {queryParams.page !== 1 && (
            <button
              className={`${styles.paginationItem} ${styles.prev}`}
              onClick={() => handle(queryParams.page - 1)}
            ></button>
          )}
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
          {queryParams.page !== totalPages && (
            <button
              className={`${styles.paginationItem} ${styles.next}`}
              onClick={() => handle(queryParams.page + 1)}
            ></button>
          )}
        </div>
      </div>
    </section>
  );
};
export default FriendsPagination;
