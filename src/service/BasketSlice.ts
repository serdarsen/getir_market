import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../model";

export const BasketSlice = createSlice({
  name: "BasketSlice",
  initialState: {
    basketItems: [] as Item[],
  },
  reducers: {
    appendBasketItem: (state, action) => {
      state.basketItems = [...state.basketItems, action.payload];
    },
    removeBasketItem: (state, action) => {
      state.basketItems = state.basketItems.filter(
        (item) => item.id !== action.payload.id,
      );
    },
  },
});

export const {
  appendBasketItem,
  removeBasketItem,
} = BasketSlice.actions;

export default BasketSlice.reducer;
