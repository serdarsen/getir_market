import {
  selectBasket,
  selectProduct,
  setPageNo,
  useAppDispatch,
  useAppSelector,
} from "../context";
import { Product } from "../model";
import { useProductsQuery } from "../service";
import Card from "./Card";
import ItemtypeView from "./ItemtypeView";
import Pagination from "./Pagination";
import ProductItemView from "./ProductItemView";

const ProductView: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    pageNo,
    sortOption,
    tagFilter,
    brandFilter,
    itemtypeFilter,
  } = useAppSelector(selectProduct);

  const { basketItemIds } = useAppSelector(selectBasket);

  const {
    data: products = {
      pageNo: 1,
      perPage: 15,
      data: [],
      totalCount: 0,
    },
  } = useProductsQuery({
    tagFilter,
    brandFilter,
    itemtypeFilter,
    order: sortOption[0],
    sort: sortOption[1],
    pageNo,
    perPage: 15,
  });

  const onChangePageNo = (page: number):void => {
    dispatch(setPageNo(page));
  };

  return (
    <div
      className="
        flex
        flex-col"
    >
      <h4
        className="
          text-custom-gray-500
          mb-[1.25rem]
          text-sm
          dark:text-gray-400"
      >
        Products
      </h4>
      <ItemtypeView />
      <Card>
        <div
          className="
            grid
            min-h-[64rem]
            content-start
            justify-items-center
            p-[1.25rem]
            max-[1830px]:grid-cols-3
            max-[1430px]:grid-cols-2
            max-[1010px]:grid-cols-1
            min-[1831px]:grid-cols-4"
        >
          {products.data.map(
            (product: Product) => (
              <ProductItemView
                key={product.id}
                product={product}
                productInBasket={basketItemIds.includes(product.id)}
              />
            ),
          )}
        </div>
      </Card>

      <Pagination
        id="productPaginationId"
        pageNo={pageNo}
        perPage={16}
        totalCount={products.totalCount || 0}
        onChangePageNo={onChangePageNo}
      />
    </div>
  );
};

export default ProductView;
