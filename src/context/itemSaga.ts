import {
  call, CallEffect, ForkEffect,
  put, PutEffect, select,
  SelectEffect, takeLatest,
} from "redux-saga/effects";
import { PageRequest } from "../model";
import { itemService } from "../service";
import { findItemsSuccess } from "./itemSlice";
import type { RootState } from "./reduxStore";

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

const getItemTypeFilter = (
  state: RootState,
):
  string[] => state.pagination.itemTypeFilter;

function* findItemsFetch(): Generator<
SelectEffect | CallEffect | PutEffect, void> {
  const pageNo = (yield select(getPageNo)) as number;
  const sortOption = (yield select(getSortOption)) as string[];
  const brandFilter = (yield select(getBrandFilter)) as string[];
  const tagFilter = (yield select(getTagFilter)) as string[];
  const itemTypeFilter = (yield select(getItemTypeFilter)) as string[];

  const pageRequest: PageRequest = {
    pageNo, sortOption, brandFilter, tagFilter, itemTypeFilter,
  };

  const items = yield call(
    itemService.findItems,
    [pageRequest],
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
  yield takeLatest("paginationSlice/removeItemTypeFilter", findItemsFetch);
  yield takeLatest("paginationSlice/appendItemTypeFilter", findItemsFetch);
}

export default itemSaga;
