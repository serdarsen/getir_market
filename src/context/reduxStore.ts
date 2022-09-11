import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import BasketReducer from "./basketSlice";
import companySaga from "./companySaga";
import CompanyReducer from "./companySlice";
import itemSaga from "./itemSaga";
import ItemReducer from "./itemSlice";
import PaginationReducer from "./paginationSlice";
import tagSaga from "./tagSaga";
import TagReducer from "./tagSlice";

const SagaMiddleware = createSagaMiddleware();

export const reduxStore = configureStore({
  reducer: {
    company: CompanyReducer,
    item: ItemReducer,
    tag: TagReducer,
    pagination: PaginationReducer,
    basket: BasketReducer,
  },
  middleware: [SagaMiddleware],
});

SagaMiddleware.run(companySaga);
SagaMiddleware.run(itemSaga);
SagaMiddleware.run(tagSaga);

export type AppDispatch = typeof reduxStore.dispatch;
export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >;
