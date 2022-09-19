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

const sagaMiddleware = createSagaMiddleware();

export const reduxStore = configureStore({
  reducer: {
    basket: basketReducer,
    company: companyReducer,
    item: itemReducer,
    itemType: itemTypeReducer,
    pagination: paginationReducer,
    tag: tagReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(companySaga);
sagaMiddleware.run(itemSaga);
sagaMiddleware.run(tagSaga);
sagaMiddleware.run(itemTypeSaga);

export type AppStore = typeof reduxStore;
export type AppDispatch = typeof reduxStore.dispatch;
export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >;
