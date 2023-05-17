export const getPagesQuantity = (totalCount: number, limit: number) => {
  return Math.ceil(totalCount / limit);
};
