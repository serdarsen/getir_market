import { createSlice } from "@reduxjs/toolkit";

export const companySlice = createSlice({
  name: "companySlice",
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
} = companySlice.actions;

export default companySlice.reducer;
