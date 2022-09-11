import {
  call, CallEffect, ForkEffect,
  put, PutEffect, select,
  SelectEffect, takeLatest,
} from "redux-saga/effects";
import { ItemService } from "../service";
import { findItemsSuccess } from "./ItemSlice";
import { RootState } from "./ReduxStore";

const getPageNo = (
  state: RootState,
): number => state.pagination.pageNo;

const getSortOption = (
  state: RootState,
):
  string[] => state.pagination.sortOption;

const getBrandFilter = (
  state: RootState,
):
 string[] => state.pagination.brandFilter;

const getTagFilter = (
  state: RootState,
):
string[] => state.pagination.tagFilter;

function* findItemsFetch(): Generator<
SelectEffect | CallEffect | PutEffect, void> {
  const pageNo = yield select(getPageNo);
  const sortOption = yield select(getSortOption);
  const brandFilter = yield select(getBrandFilter);
  const tagFilter = yield select(getTagFilter);

  const items = yield call(
    ItemService.findItems,
    [pageNo, sortOption, brandFilter, tagFilter],
  );

  yield put(findItemsSuccess(items));
}

function* ItemSaga(): Generator<ForkEffect, void> {
  yield takeLatest("ItemSlice/findItemsFetch", findItemsFetch);
  yield takeLatest("PaginationSlice/setPageNo", findItemsFetch);
  yield takeLatest("PaginationSlice/setSortOption", findItemsFetch);
}

export default ItemSaga;
