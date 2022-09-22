import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

const initialState = {
  tags: [],
  isLoading: false,
};

export const tagSlice = createSlice({
  name: "tagSlice",
  initialState,
  reducers: {
    findTagsFetch: (state) => {
      state.isLoading = true;
    },
    findTagsSuccess: (state, action) => {
      state.tags = action.payload;
      state.isLoading = false;
    },
    findTagsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const selectTag = (
  state: RootState,
): typeof initialState => state.tag;

export const {
  findTagsFetch,
  findTagsSuccess,
  findTagsFailure,
} = tagSlice.actions;

export default tagSlice.reducer;
