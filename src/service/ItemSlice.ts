import { createSlice } from "@reduxjs/toolkit";

export const ItemSlice = createSlice({
  name: "ItemSlice",
  initialState: {
    pageable: { data: [], totalCount: 0 },
    isLoading: false,
  },
  reducers: {
    findItemsFetch: (state) => {
      state.isLoading = true;
    },
    findItemsSuccess: (state, action) => {
      state.pageable = action.payload;
      state.isLoading = false;
    },
    findItemsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  findItemsFetch,
  findItemsSuccess,
  findItemsFailure,
} = ItemSlice.actions;

export default ItemSlice.reducer;
