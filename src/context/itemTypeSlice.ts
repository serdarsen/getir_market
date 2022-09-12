import { createSlice } from "@reduxjs/toolkit";

export const itemTypeSlice = createSlice({
  name: "itemTypeSlice",
  initialState: {
    itemTypes: [],
    isLoading: false,
  },
  reducers: {
    findItemTypesFetch: (state) => {
      state.isLoading = true;
    },
    findItemTypesSuccess: (state, action) => {
      state.itemTypes = action.payload;
      state.isLoading = false;
    },
    findItemTypesFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  findItemTypesFetch,
  findItemTypesSuccess,
  findItemTypesFailure,
} = itemTypeSlice.actions;

export default itemTypeSlice.reducer;
