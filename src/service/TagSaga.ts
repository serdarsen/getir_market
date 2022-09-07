import {
  call, CallEffect, ForkEffect, put, PutEffect, takeEvery,
} from "redux-saga/effects";
import { findTags } from "./TagService";
import { findTagsSuccess } from "./TagSlice";

function* findTagsFetch(): Generator<CallEffect | PutEffect, void> {
  const companies = yield call(findTags);
  yield put(findTagsSuccess(companies));
}

function* TagSaga(): Generator<ForkEffect, void> {
  yield takeEvery("TagSlice/findTagsFetch", findTagsFetch);
}

export default TagSaga;
