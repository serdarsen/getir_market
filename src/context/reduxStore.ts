import {
  Action,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import basketReducer from "./basketSlice";
import companySaga from "./companySaga";
import companyReducer from "./companySlice";
import itemSaga from "./itemSaga";
import itemReducer from "./itemSlice";
import itemTypeSaga from "./itemTypeSaga";
import itemTypeReducer from "./itemTypeSlice";
import paginationReducer from "./paginationSlice";
import tagSaga from "./tagSaga";
import tagReducer from "./tagSlice";

const SagaMiddleware = createSagaMiddleware();

export const reduxStore = configureStore({
  reducer: {
    company: companyReducer,
    item: itemReducer,
    tag: tagReducer,
    pagination: paginationReducer,
    basket: basketReducer,
    itemType: itemTypeReducer,
  },
  middleware: [SagaMiddleware],
});

SagaMiddleware.run(companySaga);
SagaMiddleware.run(itemSaga);
SagaMiddleware.run(tagSaga);
SagaMiddleware.run(itemTypeSaga);

export type AppDispatch = typeof reduxStore.dispatch;
export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >;
