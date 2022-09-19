import {
  call, CallEffect, ForkEffect,
  put, PutEffect, select,
  SelectEffect, takeEvery,
} from "redux-saga/effects";
import { tagService } from "../service";
import type { RootState } from "./reduxStore";
import { findTagsSuccess } from "./tagSlice";

const getTagSearchTerm = (
  state: RootState,
): string => state.pagination.tagSearchTerm;

function* findTagsFetch(): Generator<
SelectEffect | CallEffect | PutEffect, void
> {
  const tagSearchTerm = (yield select(getTagSearchTerm)) as string;

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
