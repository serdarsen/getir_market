import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import CompanySaga from "./CompanySaga";
import CompanyReducer from "./CompanySlice";
import ItemSaga from "./ItemSaga";
import ItemReducer from "./ItemSlice";
import TagSaga from "./TagSaga";
import TagReducer from "./TagSlice";

const SagaMiddleware = createSagaMiddleware();

export const ReduxStore = configureStore({
  reducer: {
    companies: CompanyReducer,
    items: ItemReducer,
    tags: TagReducer,
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
