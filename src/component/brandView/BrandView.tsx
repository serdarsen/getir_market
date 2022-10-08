import { FC } from "react";
import {
  appendBrandFilter,
  removeBrandFilter,
  selectProduct,
  setBrandSearchTerm,
  useAppDispatch,
  useAppSelector,
} from "../../context";
import { Countable } from "../../model";
import { useBrandsQuery } from "../../service";
import Card from "../card/Card";
import Checkbox from "../checkbox/Checkbox";
import Search from "../search/Search";
import "./brandView.scss";

const BrandView: FC = () => {
  const dispatch = useAppDispatch();
  const { brandSearchTerm, brandFilter } = useAppSelector(selectProduct);
  const { data: brands = [] } = useBrandsQuery(brandSearchTerm);

  const onChangeCheckbox = (brandName: string): void => {
    if (brandFilter.includes(brandName)) {
      dispatch(removeBrandFilter(brandName));
    } else {
      dispatch(appendBrandFilter(brandName));
    }
  };

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
              onChange={() => onChangeCheckbox("All")}
            >
              <p className="brand-view__text">All</p>
            </Checkbox>
            {brands.map(
              (brand: Countable) => (
                <Checkbox
                  id={`brandViewCheckboxId${brand.name}`}
                  key={`brandViewCheckboxKey${brand.name}`}
                  name={`brandViewCheckboxName${brand.name}`}
                  checked={
                    brandFilter.includes("All")
                    || brandFilter.includes(brand.name)
                }
                  onChange={() => onChangeCheckbox(brand.name)}
                >
                  <p className="brand-view__text">
                    {brand.name}
                    <span className="brand-view__count">
                      (
                      {brand.count}
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

export default BrandView;
