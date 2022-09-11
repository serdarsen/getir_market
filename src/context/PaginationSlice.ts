import { createSlice } from "@reduxjs/toolkit";

export const PaginationSlice = createSlice({
  name: "PaginationSlice",
  initialState: {
    pageNo: 1,
    sortOption: ["asc", "price"],
    brandFilter: [] as string[],
    tagFilter: [] as string[],
    brandSearchTerm: "" as string,
    tagSearchTerm: "" as string,
  },
  reducers: {
    setPageNo: (state, action) => {
      state.pageNo = action.payload;
    },
    setSortOption: (state, action) => {
      const { order, field } = action.payload;
      state.sortOption = [order, field];
    },
    appendBrandFilter: (state, action) => {
      state.brandFilter = [...state.brandFilter, action.payload];
    },
    removeBrandFilter: (state, action) => {
      state.brandFilter = state.brandFilter.filter(
        (brand) => brand !== action.payload,
      );
    },
    appendTagFilter: (state, action) => {
      state.tagFilter = [...state.tagFilter, action.payload];
    },
    removeTagFilter: (state, action) => {
      state.tagFilter = state.tagFilter.filter(
        (tag) => tag !== action.payload,
      );
    },
    setBrandSearchTerm: (state, action) => {
      state.brandSearchTerm = action.payload;
    },
    setTagSearchTerm: (state, action) => {
      state.tagSearchTerm = action.payload;
    },
  },
});

export const {
  setPageNo,
  setSortOption,
  appendBrandFilter,
  removeBrandFilter,
  appendTagFilter,
  removeTagFilter,
  setBrandSearchTerm,
  setTagSearchTerm,
} = PaginationSlice.actions;

export default PaginationSlice.reducer;
