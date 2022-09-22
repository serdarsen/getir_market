import type {
  CallEffect, ForkEffect, PutEffect, SelectEffect,
} from "redux-saga/effects";
import {
  call, put, select, takeLatest,
} from "redux-saga/effects";
import { companyService } from "../service";
import { findCompaniesSuccess, selectPagination } from "./index";

function* findCompaniesFetch(): Generator<
SelectEffect | CallEffect | PutEffect, void
> {
  const { brandSearchTerm } = yield select(selectPagination);

  const companies = yield call(
    companyService.findCompanies,
    [brandSearchTerm],
  );

  yield put(findCompaniesSuccess(companies));
}

function* companySaga(): Generator<ForkEffect, void> {
  yield takeLatest("companySlice/findCompaniesFetch", findCompaniesFetch);
  yield takeLatest("paginationSlice/setBrandSearchTerm", findCompaniesFetch);
}

export default companySaga;
