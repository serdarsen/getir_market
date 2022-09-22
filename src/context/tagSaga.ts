import type {
  CallEffect, ForkEffect, PutEffect, SelectEffect,
} from "redux-saga/effects";
import {
  call, put, select,
} from "redux-saga/effects";
import { tagService } from "../service";
import { findTagsSuccess } from "./index";

function* findTagsFetch(): Generator<
SelectEffect | CallEffect | PutEffect, void
> {
  const { tagSearchTerm } = (yield select(selectPagination)) as string;

  const tags = yield call(
    tagService.findTags,
    [tagSearchTerm],
  );

  yield put(findTagsSuccess(tags));
}

function* tagSaga(): Generator<ForkEffect, void> {
  yield takeEvery("tagSlice/findTagsFetch", findTagsFetch);
  yield takeEvery("paginationSlice/setTagSearchTerm", findTagsFetch);
}

export default tagSaga;
