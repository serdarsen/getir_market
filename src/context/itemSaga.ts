import type {
  CallEffect, ForkEffect, PutEffect, SelectEffect,
} from "redux-saga/effects";
import {
  call, put, select, takeLatest,
} from "redux-saga/effects";
import { PageRequest } from "../model";
import { itemService } from "../service";
import { findItemsSuccess, selectPagination } from "./index";

function* findItemsFetch():
Generator<SelectEffect | CallEffect | PutEffect, void> {
  const {
    pageNo, sortOption, brandFilter, tagFilter, itemTypeFilter,
  } = yield select(selectPagination);

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
