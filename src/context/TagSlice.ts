import { createSlice } from "@reduxjs/toolkit";

export const TagSlice = createSlice({
  name: "TagSlice",
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
} = TagSlice.actions;

export default TagSlice.reducer;
