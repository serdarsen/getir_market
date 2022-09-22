import { FC, useEffect } from "react";
import { productConst } from "../../constant";
import {
  appendItemTypeFilter,
  findItemsFetch,
  findItemTypesFetch,
  removeItemTypeFilter,
  selectBasket,
  selectItem,
  selectItemType,
  selectPagination,
  setPageNo,
  useAppDispatch,
  useAppSelector,
} from "../../context";
import { Item } from "../../model";
import Countable from "../../model/Countable";
import Card from "../card/Card";
import Chip from "../chip/Chip";
import Pagination from "../pagination/Pagination";
import ProductItemView from "../productItemView/ProductItemView";
import "./productView.scss";

const ProductView: FC = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector(selectItem);
  const { itemTypes } = useAppSelector(selectItemType);
  const { basketItemIds } = useAppSelector(selectBasket);
  const { pageNo, itemTypeFilter } = useAppSelector(selectPagination);

  const onChangeChip = (itemTypeName: string): void => {
    if (itemTypeFilter.includes(itemTypeName)) {
      dispatch(removeItemTypeFilter(itemTypeName));
    } else {
      dispatch(appendItemTypeFilter(itemTypeName));
    }
  };

  const onChangePageNo = (page: number):void => {
    dispatch(setPageNo(page));
  };

  useEffect(() => {
    dispatch(findItemsFetch());
    dispatch(findItemTypesFetch());
  }, [dispatch]);

  return (
    <div className="product-view">

      <h4 className="product-view__title">Products</h4>

      <div className="product-view__chip">
        {itemTypes.map((itemType: Countable) => (
          <Chip
            id={`chipId${itemType.name}`}
            key={`chipKey${itemType.name}`}
            name={`chipName${itemType.name}`}
            checked={itemTypeFilter.includes(itemType.name)}
            onChange={() => onChangeChip(itemType.name)}
          >
            {itemType.name}
          </Chip>
        ))}
      </div>

      <Card>
        <div className="product-view__body">
          {items.data.map(
            (item: Item) => (
              <ProductItemView
                key={item.id}
                item={item}
                itemInBasket={basketItemIds.includes(item.id)}
              />
            ),
          )}
        </div>
      </Card>

      <Pagination
        pageNo={pageNo}
        perPageItemSize={productConst.PER_PAGE_ITEM_SIZE}
        totalCount={items.totalCount}
        onChangePageNo={onChangePageNo}
      />
    </div>
  );
};

export default ProductView;
