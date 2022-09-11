import {
  call, CallEffect, ForkEffect, put, PutEffect, select, takeEvery,
} from "redux-saga/effects";
import { TagService } from "../service";
import { RootState } from "./ReduxStore";
import { findTagsSuccess } from "./TagSlice";

const getTagSearchTerm = (
  state: RootState,
): string => state.pagination.tagSearchTerm;

function* findTagsFetch(): Generator<
SelectEffect | CallEffect | PutEffect, void
> {
  const tagSearchTerm = yield select(getTagSearchTerm);

  const tags = yield call(
    TagService.findTags,
    [tagSearchTerm],
  );

  yield put(findTagsSuccess(tags));
}

function* TagSaga(): Generator<ForkEffect, void> {
  yield takeEvery("TagSlice/findTagsFetch", findTagsFetch);
  yield takeEvery("PaginationSlice/setTagSearchTerm", findTagsFetch);
}

export default TagSaga;
