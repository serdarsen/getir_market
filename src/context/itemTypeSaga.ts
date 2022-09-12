import {
  call, CallEffect, ForkEffect,
  put, PutEffect, takeLatest,
} from "redux-saga/effects";
import { itemTypeService } from "../service";
import { findItemTypesSuccess } from "./itemTypeSlice";

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
