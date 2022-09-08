import { createSlice } from "@reduxjs/toolkit";

export const PageSlice = createSlice({
  name: "PageSlice",
  initialState: {
    pageNo: 1,
  },
  reducers: {
    setPageNo: (state, action) => {
      state.pageNo = action.payload;
    },
  },
});

export const {
  setPageNo,
} = PageSlice.actions;

export default PageSlice.reducer;
