import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

const initialState = {
  pageNo: 1,
  sortOption: ["asc", "price"],

  brandSearchTerm: "",
  tagSearchTerm: "",

  brandFilter: [] as string[],
  tagFilter: [] as string[],
  itemtypeFilter: [] as string[],
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setPageNo: (state, action) => {
      state.pageNo = action.payload;
    },
    setSortOption: (state, action) => {
      const { order, field } = action.payload;
      state.sortOption = [order, field];
      state.pageNo = 1;
    },
    setBrandSearchTerm: (state, action) => {
      state.brandSearchTerm = action.payload;
    },
    appendBrandFilter: (state, action) => {
      state.brandFilter = [...state.brandFilter, action.payload];
      state.pageNo = 1;
    },
    removeBrandFilter: (state, action) => {
      if (action.payload.length === 0
            || action.payload.includes("All")) {
        state.brandFilter = [];
        return;
      }

      state.brandFilter = state.brandFilter.filter(
        (brand) => brand !== action.payload,
      );

      state.pageNo = 1;
    },
    appendItemtypeFilter: (state, action) => {
      state.itemtypeFilter = [...state.itemtypeFilter, action.payload];
      state.pageNo = 1;
    },
    removeItemtypeFilter: (state, action) => {
      if (action.payload.length === 0
            || action.payload.includes("All")) {
        state.itemtypeFilter = [];
        return;
      }

      state.itemtypeFilter = state.itemtypeFilter.filter(
        (itemtype) => itemtype !== action.payload,
      );

      state.pageNo = 1;
    },
    setTagSearchTerm: (state, action) => {
      state.tagSearchTerm = action.payload;
    },
    appendTagFilter: (state, action) => {
      state.tagFilter = [...state.tagFilter, action.payload];
      state.pageNo = 1;
    },
    removeTagFilter: (state, action) => {
      if (action.payload.length === 0
            || action.payload.includes("All")) {
        state.tagFilter = [];
        return;
      }

      state.tagFilter = state.tagFilter.filter(
        (tag) => tag !== action.payload,
      );

      state.pageNo = 1;
    },
  },
});

export const selectProduct = (
  state: RootState,
): typeof initialState => state.product;

export const {
  setPageNo,
  setSortOption,
  setBrandSearchTerm,
  appendBrandFilter,
  removeBrandFilter,
  appendItemtypeFilter,
  removeItemtypeFilter,
  setTagSearchTerm,
  appendTagFilter,
  removeTagFilter,
} = productSlice.actions;

export default productSlice.reducer;
