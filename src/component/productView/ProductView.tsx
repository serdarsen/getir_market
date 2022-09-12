import React, { useEffect } from "react";
import {
  findItemsFetch,
  useAppDispatch,
  useAppSelector,
} from "../../context";
import { findItemTypesFetch } from "../../context/itemTypeSlice";
import { Item } from "../../model";
import Countable from "../../model/Countable";
import Card from "../card/Card";
import Chip from "../chip/Chip";
import Pagination from "../pagination/Pagination";
import ProductItemView from "../productItemView/ProductItemView";
import "./productView.scss";

const ProductView: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.item.pageable);
  const itemTypes = useAppSelector((state) => state.itemType.itemTypes);
  const basketItemIds = useAppSelector((state) => state.basket.basketItemIds);

  useEffect(() => {
    dispatch(findItemsFetch());
    dispatch(findItemTypesFetch());
  }, [dispatch]);

  const onChangeChip = (): void => {
    console.log("on change chip");
  };

  return (
    <div className="product-view">
      <h4 className="product-view__title">Products</h4>

      <div className="product-view__chip">
        {itemTypes.map((itemType: Countable) => (
          <Chip
            id={`chipId${itemType.name}`}
            key={`chipKey${itemType.name}`}
            name={`chipName${itemType.name}`}
            text={itemType.name}
            onChange={onChangeChip}
          />
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

      <Pagination />

    </div>
  );
};

export default ProductView;
