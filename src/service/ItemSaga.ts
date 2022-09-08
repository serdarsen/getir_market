import {
  call, CallEffect, ForkEffect, put, PutEffect, select, SelectEffect, takeEvery,
} from "redux-saga/effects";
import { findItems } from "./ItemService";
import { findItemsSuccess } from "./ItemSlice";
import { RootState } from "./ReduxStore";

const getPageNo = (state: RootState): number => state.pageNo.pageNo;

function* findItemsFetch(): Generator<
SelectEffect | CallEffect | PutEffect, void> {
  const pageNo = yield select(getPageNo);
  const items = yield call(findItems, [pageNo]);
  yield put(findItemsSuccess(items));
}

function* ItemSaga(): Generator<ForkEffect, void> {
  yield takeEvery("ItemSlice/findItemsFetch", findItemsFetch);
  yield takeEvery("PaginationSlice/setPageNo", findItemsFetch);
}

export default ItemSaga;
