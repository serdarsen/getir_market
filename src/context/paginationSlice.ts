import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: "paginationSlice",
  initialState: {
    pageNo: 1,
    sortOption: ["asc", "price"],
    brandFilter: [] as string[],
    tagFilter: [] as string[],
    itemTypeFilter: [] as string[],
    brandSearchTerm: "" as string,
    tagSearchTerm: "" as string,
  },
  reducers: {
    setPageNo: (state, action) => {
      state.pageNo = action.payload;
    },
    setSortOption: (state, action) => {
      state.pageNo = 1;
      const { order, field } = action.payload;
      state.sortOption = [order, field];
    },
    appendBrandFilter: (state, action) => {
      state.pageNo = 1;
      state.brandFilter = [...state.brandFilter, action.payload];
    },
    removeBrandFilter: (state, action) => {
      state.pageNo = 1;
      if (action.payload.length === 0
        || action.payload.includes("All")) {
        state.brandFilter = [];
        return;
      }

      state.brandFilter = state.brandFilter.filter(
        (brand) => brand !== action.payload,
      );
    },
    appendTagFilter: (state, action) => {
      state.pageNo = 1;
      state.tagFilter = [...state.tagFilter, action.payload];
    },
    removeTagFilter: (state, action) => {
      state.pageNo = 1;
      if (action.payload.length === 0
        || action.payload.includes("All")) {
        state.tagFilter = [];
        return;
      }

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
    appendItemTypeFilter: (state, action) => {
      state.pageNo = 1;
      state.itemTypeFilter = [...state.itemTypeFilter, action.payload];
    },
    removeItemTypeFilter: (state, action) => {
      state.pageNo = 1;
      if (action.payload.length === 0) {
        state.itemTypeFilter = [];
        return;
      }

      state.itemTypeFilter = state.itemTypeFilter.filter(
        (itemType) => itemType !== action.payload,
      );
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
  removeItemTypeFilter,
  appendItemTypeFilter,
} = paginationSlice.actions;

export default paginationSlice.reducer;
