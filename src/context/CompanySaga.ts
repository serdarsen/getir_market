import {
  call, CallEffect, ForkEffect, put, PutEffect, takeEvery,
} from "redux-saga/effects";
import { CompanyService } from "../service";
import { findCompaniesSuccess } from "./CompanySlice";

function* findCompaniesFetch(): Generator<CallEffect | PutEffect, void> {
  const companies = yield call(CompanyService.findCompanies);
  yield put(findCompaniesSuccess(companies));
}

function* CompanySaga(): Generator<ForkEffect, void> {
  yield takeEvery("CompanySlice/findCompaniesFetch", findCompaniesFetch);
}

export default CompanySaga;
