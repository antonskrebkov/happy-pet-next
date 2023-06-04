import { IFriend } from "@/interfaces/IFriend";

export const summarize = (cartList: IFriend[]) => {
  const priceArray: number[] = [];
  if (cartList.length !== 0) {
    cartList.forEach((cartItem) => priceArray.push(cartItem.price));
    return priceArray.reduce((a, b) => a + b);
  } else {
    return 0;
  }
};
