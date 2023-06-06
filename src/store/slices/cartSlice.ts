import { IFriend } from "@/interfaces/IFriend";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: IFriend[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IFriend>) {
      if (!state.find((friend) => friend.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<IFriend>) {
      state.splice(
        state.findIndex((friend) => friend.id === action.payload.id),
        1
      );
    },
    cleanCart(state) {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, cleanCart } = cartSlice.actions;
export default cartSlice.reducer;
