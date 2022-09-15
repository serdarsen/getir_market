import {
  call, CallEffect, ForkEffect,
  put, PutEffect, select,
  SelectEffect, takeLatest,
} from "redux-saga/effects";
import { companyService } from "../service";
import { findCompaniesSuccess } from "./companySlice";
import { RootState } from "./reduxStore";

const getBrandSearchTerm = (
  state: RootState,
): string => state.pagination.brandSearchTerm;

function* findCompaniesFetch(): Generator<
SelectEffect | CallEffect | PutEffect, void
> {
  const brandSearchTerm = (yield select(getBrandSearchTerm)) as string;

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
