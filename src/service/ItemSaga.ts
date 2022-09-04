import {
  call, CallEffect, ForkEffect, put, PutEffect, takeEvery,
} from "redux-saga/effects";
import { findItems } from "./ItemService";
import { findItemsSuccess } from "./ItemSlice";

function* findItemsFetch():
    Generator<CallEffect | PutEffect, void> {
  const items = yield call(findItems);
  yield put(findItemsSuccess(items));
}

function* ItemSaga():
    Generator<ForkEffect, void> {
  yield takeEvery("ItemSlice/findItemsFetch", findItemsFetch);
}

export default ItemSaga;
