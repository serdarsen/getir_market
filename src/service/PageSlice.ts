import { createSlice } from "@reduxjs/toolkit";

export const PageSlice = createSlice({
  name: "PageSlice",
  initialState: {
    page: 1,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const {
  setPage,
} = PageSlice.actions;

export default PageSlice.reducer;
