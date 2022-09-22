import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

const initialState = {
  items: { data: [], totalCount: 0 },
  isLoading: false,
};

export const itemSlice = createSlice({
  name: "itemSlice",
  initialState,
  reducers: {
    findItemsFetch: (state) => {
      state.isLoading = true;
    },
    findItemsSuccess: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    findItemsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const selectItem = (
  state: RootState,
): typeof initialState => state.item;

export const {
  findItemsFetch,
  findItemsSuccess,
  findItemsFailure,
} = itemSlice.actions;

export default itemSlice.reducer;
