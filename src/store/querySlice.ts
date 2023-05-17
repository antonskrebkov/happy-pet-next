import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import IQuery, { ISort } from "@/interfaces/IQuery";

const initialState: IQuery = {
  filter: [],
  sort: { sortBy: "id", order: "desc" },
  page: 1,
};

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    addNewFilter(state, action) {
      state.filter.forEach((filterItem) => {
        if (filterItem.key === action.payload.key) {
          filterItem.value = action.payload.value;
          return;
        }
      });
      state.filter.push(action.payload);
    },
    addSort(state, action: PayloadAction<ISort>) {
      console.log(action.payload);
      if (JSON.stringify(state.sort) !== JSON.stringify(action.payload)) {
        state.sort = action.payload;
      }
    },
    paginate(state, action: PayloadAction<number>) {
      if (JSON.stringify(state.page) !== JSON.stringify(action.payload)) {
        state.page = action.payload;
      }
    },
  },
});

export const { addNewFilter, addSort, paginate } = querySlice.actions;
export default querySlice.reducer;
