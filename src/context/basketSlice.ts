import { createSlice } from "@reduxjs/toolkit";
import { BasketItem } from "../model";
import type { RootState } from "./index";

const initialState = {
  basketItems: [] as BasketItem[],
  basketItemIds: [] as string[],
  totalPrice: 0,
};

const calculateTotalPrice = (
  basketItems: BasketItem[],
): number => basketItems.reduce(
  (sum, { price, quantity }) => sum + (price * quantity),
  0,
);

const findBasketItemById = (
  basketItems: BasketItem[],
  id: number,
): BasketItem => basketItems.filter(
  (item) => item.id === id,
)[0] || null;

const removeBasketItemById = (
  basketItems: BasketItem[],
  id: number,
): BasketItem[] => basketItems.filter(
  (item) => item.id !== id,
);

const updateExistingBasketItem = (
  basketItems: BasketItem[],
  basketItem: BasketItem,
): BasketItem[] => basketItems.map(
  (item) => (item.id === basketItem.id ? basketItem : item),
);

const appendNewBasketItem = (
  basketItems: BasketItem[],
  basketItem: BasketItem,
): BasketItem[] => [...basketItems, basketItem];

export const basketSlice = createSlice({
  name: "basketSlice",
  initialState,
  reducers: {
    appendBasketItem: (state, action) => {
      const { basketItems, basketItemIds } = state;
      const { payload } = action;

      if (findBasketItemById(basketItems, payload.id)) {
        return;
      }

      state.basketItems = appendNewBasketItem(basketItems, payload);
      state.basketItemIds = [...basketItemIds, payload.id];
      state.totalPrice = calculateTotalPrice(state.basketItems);
    },
    removeBasketItem: (state, action) => {
      const { basketItems, basketItemIds } = state;
      const { payload } = action;

      state.basketItems = removeBasketItemById(basketItems, payload.id);
      state.basketItemIds = basketItemIds.filter((id) => id !== payload.id);
      state.totalPrice = calculateTotalPrice(state.basketItems);
    },
    updateBasketItem: (state, action) => {
      const { basketItems } = state;
      const { payload } = action;

      if (!findBasketItemById(basketItems, payload.id)) {
        return;
      }

      state.basketItems = updateExistingBasketItem(basketItems, payload);
      state.totalPrice = calculateTotalPrice(state.basketItems);
    },
  },
});

export const selectBasket = (
  state: RootState,
): typeof initialState => state.basket;

export const {
  appendBasketItem,
  removeBasketItem,
  updateBasketItem,
} = basketSlice.actions;

export default basketSlice.reducer;
