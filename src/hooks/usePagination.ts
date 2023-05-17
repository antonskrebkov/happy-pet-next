import { useMemo } from "react";

export const usePagination = (totalPages: number) => {
  let pagesArray: number[] = [];
  const updatedPagesArray = useMemo(() => {
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }
    console.log("====PAGES UPDATED====");
    return pagesArray;
  }, [totalPages]);
  return updatedPagesArray;
};
