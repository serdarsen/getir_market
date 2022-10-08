import { FC } from "react";
import { productConst } from "../../constant";
import {
  selectBasket,
  selectProduct,
  setPageNo,
  useAppDispatch,
  useAppSelector,
} from "../../context";
import { Product } from "../../model";
import { useProductsQuery } from "../../service";
import Card from "../card/Card";
import ItemtypeView from "../itemtypeView/ItemtypeView";
import Pagination from "../pagination/Pagination";
import ProductItemView from "../productItemView/ProductItemView";
import "./productView.scss";

const ProductView: FC = () => {
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
      perPage: productConst.PER_PAGE,
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
    perPage: productConst.PER_PAGE,
  });

  const onChangePageNo = (page: number):void => {
    dispatch(setPageNo(page));
  };

  return (
    <div className="product-view">
      <h4 className="product-view__title">Products</h4>
      <ItemtypeView />

      <Card>
        <div className="product-view__body">
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
        perPage={productConst.PER_PAGE}
        totalCount={products.totalCount || 0}
        onChangePageNo={onChangePageNo}
      />
    </div>
  );
};

export default ProductView;
