import { createSlice } from "@reduxjs/toolkit";

export const ItemSlice = createSlice({
  name: "ItemSlice",
  initialState: {
    items: [],
    isLoading: false,
  },
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

export const {
  findItemsFetch,
  findItemsSuccess,
  findItemsFailure,
} = ItemSlice.actions;

export default ItemSlice.reducer;
