import {
  call, CallEffect, ForkEffect, put, PutEffect, takeEvery,
} from "redux-saga/effects";
import { TagService } from "../service";
import { findTagsSuccess } from "./TagSlice";

function* findTagsFetch(): Generator<CallEffect | PutEffect, void> {
  const tags = yield call(TagService.findTags);
  yield put(findTagsSuccess(tags));
}

function* TagSaga(): Generator<ForkEffect, void> {
  yield takeEvery("TagSlice/findTagsFetch", findTagsFetch);
}

export default TagSaga;
