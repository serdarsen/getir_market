import {
  call, CallEffect, ForkEffect,
  put, PutEffect, select,
  SelectEffect, takeLatest,
} from "redux-saga/effects";
import { itemService } from "../service";
import { findItemsSuccess } from "./itemSlice";
import { RootState } from "./reduxStore";

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
    itemService.findItems,
    [pageNo, sortOption, brandFilter, tagFilter],
  );

  yield put(findItemsSuccess(items));
}

function* itemSaga(): Generator<ForkEffect, void> {
  yield takeLatest("itemSlice/findItemsFetch", findItemsFetch);
  yield takeLatest("paginationSlice/setPageNo", findItemsFetch);
  yield takeLatest("paginationSlice/setSortOption", findItemsFetch);
  yield takeLatest("paginationSlice/removeBrandFilter", findItemsFetch);
  yield takeLatest("paginationSlice/appendBrandFilter", findItemsFetch);
  yield takeLatest("paginationSlice/removeTagFilter", findItemsFetch);
  yield takeLatest("paginationSlice/appendTagFilter", findItemsFetch);
}

export default itemSaga;
