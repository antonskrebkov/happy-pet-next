export const formatPrice = (price: number) => {
  return price.toLocaleString("ua", {
    style: "currency",
    currency: "uah",
  });
};
