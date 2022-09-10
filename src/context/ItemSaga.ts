import {
  call, CallEffect, ForkEffect, put, PutEffect, select, SelectEffect, takeEvery,
} from "redux-saga/effects";
import { ItemService } from "../service";
import { findItemsSuccess } from "./ItemSlice";
import { RootState } from "./ReduxStore";

const getPageNo = (state: RootState): number => state.pagination.pageNo;

function* findItemsFetch(): Generator<
SelectEffect | CallEffect | PutEffect, void> {
  const pageNo = yield select(getPageNo);
  const items = yield call(ItemService.findItems, [pageNo]);
  yield put(findItemsSuccess(items));
}

function* ItemSaga(): Generator<ForkEffect, void> {
  yield takeEvery("ItemSlice/findItemsFetch", findItemsFetch);
  yield takeEvery("PaginationSlice/setPageNo", findItemsFetch);
}

export default ItemSaga;
