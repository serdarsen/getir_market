import type {
  CallEffect, ForkEffect, PutEffect,
} from "redux-saga/effects";
import {
  call, put, takeLatest,
} from "redux-saga/effects";
import { itemTypeService } from "../service";
import { findItemTypesSuccess } from "./index";

function* findItemTypesFetch(): Generator<
CallEffect | PutEffect, void
> {
  const itemTypes = yield call(
    itemTypeService.findItemTypes,
  );

  yield put(findItemTypesSuccess(itemTypes));
}

function* itemTypeSaga(): Generator<ForkEffect, void> {
  yield takeLatest("itemTypeSlice/findItemTypesFetch", findItemTypesFetch);
}

export default itemTypeSaga;
