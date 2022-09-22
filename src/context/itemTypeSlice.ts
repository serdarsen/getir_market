import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

const initialState = {
  itemTypes: [],
  isLoading: false,
};

export const itemTypeSlice = createSlice({
  name: "itemTypeSlice",
  initialState,
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

export const selectItemType = (
  state: RootState,
): typeof initialState => state.itemType;

export const {
  findItemTypesFetch,
  findItemTypesSuccess,
  findItemTypesFailure,
} = itemTypeSlice.actions;

export default itemTypeSlice.reducer;
