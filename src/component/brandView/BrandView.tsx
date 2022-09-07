import React, { useEffect } from "react";
import Company from "../../model/Company";
import { findCompaniesFetch } from "../../service/CompanySlice";
import { useAppDispatch, useAppSelector } from "../../service/ReduxHook";
import Card from "../card/Card";
import Checkbox from "../checkbox/Checkbox";
import Search from "../search/Search";
import "./brandView.scss";

const Brands: React.FC = () => {
  const companies = useAppSelector((state) => state.companies.companies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findCompaniesFetch());
  }, [dispatch]);

  const onSearch = (searchTerm: string):void => {
    console.log("searchTerm: ", searchTerm);
  };

  return (
    <div className="brand-view">
      <p className="brand-view__title">Brands</p>
      <Card>
        <div className="brand-view__body">
          <div className="brand-view__search">
            <Search
              id="brandViewSearchId"
              placeholder="Search brand"
              onSearch={onSearch}
            />
          </div>
          <div className="brand-view__brands">
            <Checkbox
              id="brandViewCheckboxIdAll"
              name="brandViewCheckboxNameAll"
              text="All"
            />
            {companies.map(
              (company: Company) => (
                <Checkbox
                  id={`brandViewCheckboxId${company.id}`}
                  name={`brandViewCheckboxName${company.id}`}
                  text={company.name}
                />
              ),
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Brands;
