import React, { useEffect } from "react";
import {
  findCompaniesFetch,
  setBrandSearchTerm,
  useAppDispatch,
  useAppSelector,
} from "../../context";
import Company from "../../model/Company";
import Card from "../card/Card";
import Checkbox from "../checkbox/Checkbox";
import Search from "../search/Search";
import "./brandView.scss";

const Brands: React.FC = () => {
  const companies = useAppSelector((state) => state.company.companies);

  const brandSearchTerm = useAppSelector(
    (state) => state.pagination.brandSearchTerm,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findCompaniesFetch());
  }, [dispatch]);

  const onSearch = (searchTerm: string):void => {
    dispatch(setBrandSearchTerm(searchTerm));
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
              searchTerm={brandSearchTerm}
              onSearch={onSearch}
            />
          </div>
          <div className="brand-view__brands">
            <Checkbox
              id="brandViewCheckboxIdAll"
              key="brandViewCheckboxKeyAll"
              name="brandViewCheckboxNameAll"
              text="All"
            />
            {companies.map(
              (company: Company) => (
                <Checkbox
                  id={`brandViewCheckboxId${company.id}`}
                  key={`brandViewCheckboxKey${company.id}`}
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
