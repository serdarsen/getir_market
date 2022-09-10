import { createSlice } from "@reduxjs/toolkit";

export const PaginationSlice = createSlice({
  name: "PaginationSlice",
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
} = PaginationSlice.actions;

export default PaginationSlice.reducer;
