import React, { useEffect } from "react";
import {
  findItemsFetch,
  useAppDispatch,
  useAppSelector,
} from "../../context";
import { Item } from "../../model";
import Card from "../card/Card";
import Chip from "../chip/Chip";
import Pagination from "../pagination/Pagination";
import ProductItemView from "../productItemView/ProductItemView";
import "./productView.scss";

const ProductView: React.FC = () => {
  const items = useAppSelector((state) => state.item.pageable);
  const basketItemIds = useAppSelector((state) => state.basket.basketItemIds);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findItemsFetch());
  }, [dispatch]);

  const onChangeChip = (id: string, checked: boolean): void => {
    console.log(`${id} is checked: ${checked}`);
  };

  return (
    <div className="product-view">
      <h4 className="product-view__title">Products</h4>

      <div className="product-view__chip">
        {["mug", "shirt"].map((itemType) => (
          <Chip
            id={`chipId${itemType}`}
            key={`chipKey${itemType}`}
            name={`chipName${itemType}`}
            text={itemType}
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
