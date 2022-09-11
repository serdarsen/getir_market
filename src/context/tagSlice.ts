import { createSlice } from "@reduxjs/toolkit";

export const tagSlice = createSlice({
  name: "tagSlice",
  initialState: {
    tags: [],
    isLoading: false,
  },
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

export const {
  findTagsFetch,
  findTagsSuccess,
  findTagsFailure,
} = tagSlice.actions;

export default tagSlice.reducer;
