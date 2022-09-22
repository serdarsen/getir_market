import type { PreloadedState } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import type { RenderOptions, RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import type { PropsWithChildren } from "react";
import React from "react";
import { Provider } from "react-redux";
import type { AppStore, RootState } from "../context";
import basketReducer from "../context/basketSlice";
import companyReducer from "../context/companySlice";
import itemReducer from "../context/itemSlice";
import itemTypeReducer from "../context/itemTypeSlice";
import paginationReducer from "../context/paginationSlice";
import tagReducer from "../context/tagSlice";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState,
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        basket: basketReducer,
        company: companyReducer,
        item: itemReducer,
        itemType: itemTypeReducer,
        pagination: paginationReducer,
        tag: tagReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
): { store: AppStore, renderResult: RenderResult } => {
  const Wrapper = (
    { children }: PropsWithChildren<Record<string, unknown>>,
  ): JSX.Element => <Provider store={store}>{children}</Provider>;

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    renderResult: render(ui, {
      wrapper: Wrapper, ...renderOptions,
    }),
  };
};
