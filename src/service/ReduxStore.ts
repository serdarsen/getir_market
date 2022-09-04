import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import ReduxSaga from "./CompanySaga";
import CompanyReducer from "./CompanySlice";

const SagaMiddleware = createSagaMiddleware();

export const ReduxStore = configureStore({
  reducer: {
    companies: CompanyReducer,
  },
  middleware: [SagaMiddleware],
});
SagaMiddleware.run(ReduxSaga);

export type AppDispatch = typeof ReduxStore.dispatch;
export type RootState = ReturnType<typeof ReduxStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >;
