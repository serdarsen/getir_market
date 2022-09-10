import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import BasketReducer from "./BasketSlice";
import CompanySaga from "./CompanySaga";
import CompanyReducer from "./CompanySlice";
import ItemSaga from "./ItemSaga";
import ItemReducer from "./ItemSlice";
import PaginationReducer from "./PaginationSlice";
import TagSaga from "./TagSaga";
import TagReducer from "./TagSlice";

const SagaMiddleware = createSagaMiddleware();

export const ReduxStore = configureStore({
  reducer: {
    company: CompanyReducer,
    item: ItemReducer,
    tag: TagReducer,
    pagination: PaginationReducer,
    basket: BasketReducer,
  },
  middleware: [SagaMiddleware],
});

SagaMiddleware.run(CompanySaga);
SagaMiddleware.run(ItemSaga);
SagaMiddleware.run(TagSaga);

export type AppDispatch = typeof ReduxStore.dispatch;
export type RootState = ReturnType<typeof ReduxStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >;
