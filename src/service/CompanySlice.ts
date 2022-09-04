import { createSlice } from "@reduxjs/toolkit";

export const CompanySlice = createSlice({
  name: "CompanySlice",
  initialState: {
    companies: [],
    isLoading: false,
  },
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

export const {
  findCompaniesFetch,
  findCompaniesSuccess,
  findCompaniesFailure,
} = CompanySlice.actions;

export default CompanySlice.reducer;
