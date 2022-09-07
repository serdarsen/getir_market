import {
  call, CallEffect, ForkEffect, put, PutEffect, takeEvery,
} from "redux-saga/effects";
import { findCompanies } from "./CompanyService";
import { findCompaniesSuccess } from "./CompanySlice";

function* findCompaniesFetch(): Generator<CallEffect | PutEffect, void> {
  const companies = yield call(findCompanies);
  yield put(findCompaniesSuccess(companies));
}

function* CompanySaga(): Generator<ForkEffect, void> {
  yield takeEvery("CompanySlice/findCompaniesFetch", findCompaniesFetch);
}

export default CompanySaga;
