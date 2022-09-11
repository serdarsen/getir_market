import React, { useEffect } from "react";
import {
  appendBrandFilter,
  findCompaniesFetch,
  removeBrandFilter,
  setBrandSearchTerm,
  useAppDispatch,
  useAppSelector,
} from "../../context";
import Countable from "../../model/Countable";
import Card from "../card/Card";
import Checkbox from "../checkbox/Checkbox";
import Search from "../search/Search";
import "./brandView.scss";

const Brands: React.FC = () => {
  const dispatch = useAppDispatch();
  const companies = useAppSelector((state) => state.company.companies);
  const brandFilter = useAppSelector((state) => state.pagination.brandFilter);

  const brandSearchTerm = useAppSelector(
    (state) => state.pagination.brandSearchTerm,
  );

  const onChange = (brandName: string): void => {
    if (brandFilter.includes(brandName)) {
      dispatch(removeBrandFilter(brandName));
    } else {
      dispatch(appendBrandFilter(brandName));
    }
  };

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
              checked={brandFilter.includes("All")}
              onChange={() => onChange("All")}
            >
              <p className="brand-view__text">All</p>
            </Checkbox>
            {companies.map(
              (company: Countable) => (
                <Checkbox
                  id={`brandViewCheckboxId${company.name}`}
                  key={`brandViewCheckboxKey${company.name}`}
                  name={`brandViewCheckboxName${company.name}`}
                  checked={
                    brandFilter.includes("All")
                    || brandFilter.includes(company.name)
                }
                  onChange={() => onChange(company.name)}
                >
                  <p className="brand-view__text">
                    {company.name}
                    <span className="brand-view__count">
                      (
                      {company.count}
                      )
                    </span>

                  </p>
                </Checkbox>
              ),
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Brands;
