import type { PreloadedState } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import type { RenderOptions, RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import type { PropsWithChildren } from "react";
import React from "react";
import { Provider } from "react-redux";
import type { AppStore, RootState } from "../context";
import { basketReducer, productReducer } from "../context";
import { api } from "../service";

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
        product: productReducer,
        [api.reducerPath]: api.reducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .prepend(api.middleware),
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
