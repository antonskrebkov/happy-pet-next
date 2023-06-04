import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import IQuery, { IFilter, ISort } from "@/interfaces/IQuery";

const initialState: IQuery = {
  filter: [],
  sort: { sortBy: "id", order: "desc" },
  page: 1,
};

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    addNewFilter(state, action: PayloadAction<IFilter>) {
      if (action.payload.value === "") {
        state.filter = state.filter.filter(
          (filterItem) => filterItem.key !== action.payload.key
        );
      } else {
        let changed = false;
        state.filter.forEach((filterItem) => {
          if (filterItem.key === action.payload.key) {
            filterItem.value = action.payload.value;
            changed = true;
          }
        });
        if (!changed) {
          state.filter = [...state.filter, action.payload];
        }
      }
    },
    resetFilter(state) {
      state.filter = [];
    },
    addSort(state, action: PayloadAction<ISort>) {
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

export const { addNewFilter, resetFilter, addSort, paginate } =
  querySlice.actions;
export default querySlice.reducer;
