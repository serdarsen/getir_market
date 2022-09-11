import {
  call, CallEffect, ForkEffect,
  put, PutEffect, select, SelectEffect, takeLatest,
} from "redux-saga/effects";
import { CompanyService } from "../service";
import { findCompaniesSuccess } from "./CompanySlice";
import { RootState } from "./ReduxStore";

const getBrandSearchTerm = (
  state: RootState,
): string => state.pagination.brandSearchTerm;

function* findCompaniesFetch(): Generator<
SelectEffect | CallEffect | PutEffect, void
> {
  const brandSearchTerm = yield select(getBrandSearchTerm);

  const companies = yield call(
    CompanyService.findCompanies,
    [brandSearchTerm],
  );

  yield put(findCompaniesSuccess(companies));
}

function* CompanySaga(): Generator<ForkEffect, void> {
  yield takeLatest("CompanySlice/findCompaniesFetch", findCompaniesFetch);
  yield takeLatest("PaginationSlice/setBrandSearchTerm", findCompaniesFetch);
}

export default CompanySaga;
