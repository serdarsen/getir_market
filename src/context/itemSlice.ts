import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "itemSlice",
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
} = itemSlice.actions;

export default itemSlice.reducer;
