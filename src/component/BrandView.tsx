import {
  appendBrandFilter,
  removeBrandFilter,
  selectProduct,
  setBrandSearchTerm,
  useAppDispatch,
  useAppSelector,
} from "../context";
import { Countable } from "../model";
import { useBrandsQuery } from "../service";
import Card from "./Card";
import Checkbox from "./Checkbox";
import Search from "./Search";

const BrandView: React.FC = () => {
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
    <div
      className="
        flex
        h-[17rem]
        w-[18.5rem]
        flex-col
        gap-[0.75rem]"
    >
      <p
        className="
          text-custom-gray-500
          text-start
          text-sm
          dark:text-gray-400"
      >
        Brands
      </p>
      <Card>
        <div
          className="
            h-[15.25rem]
            w-[18.5rem]"
        >
          <div
            className="
              p-[1.5rem]"
          >
            <Search
              id="brandViewSearchId"
              placeholder="Search brand"
              searchTerm={brandSearchTerm}
              onSearch={onSearch}
            />
          </div>
          <div
            className="
              scrollbar
              flex
              h-[8.8rem]
              w-[17rem]
              flex-col
              gap-[1.125rem]
              overflow-y-scroll
              px-[1.5rem]
              pt-[0.35rem]
              pb-[0.8125rem]"
          >
            <Checkbox
              id="brandViewCheckboxIdAll"
              key="brandViewCheckboxKeyAll"
              name="brandViewCheckboxNameAll"
              checked={brandFilter.includes("All")}
              onChange={() => onChangeCheckbox("All")}
            >
              <p
                className="
                  text-custom-black-600
                  text-start
                  text-sm
                  dark:text-gray-400"
              >
                All
              </p>
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
                  <p
                    className="
                      text-custom-black-600
                      text-start
                      text-sm
                      dark:text-gray-400"
                  >
                    {brand.name}
                    <span
                      className="
                        text-custom-black-300
                        ml-1
                        text-sm
                        dark:text-gray-500"
                    >
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
