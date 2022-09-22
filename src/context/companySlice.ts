import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

const initialState = {
  companies: [],
  isLoading: false,
};

export const companySlice = createSlice({
  name: "companySlice",
  initialState,
  reducers: {
    findCompaniesFetch: (state) => {
      state.isLoading = true;
    },
    findCompaniesSuccess: (state, action) => {
      state.companies = action.payload;
      state.isLoading = false;
    },
    findCompaniesFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const selectCompany = (
  state: RootState,
): typeof initialState => state.company;

export const {
  findCompaniesFetch,
  findCompaniesSuccess,
  findCompaniesFailure,
} = companySlice.actions;

export default companySlice.reducer;
