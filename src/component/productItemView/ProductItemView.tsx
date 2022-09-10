import React from "react";
import {
  appendBasketItem,
  removeBasketItem,
  useAppDispatch,
} from "../../context";
import { Item } from "../../model";
import { PRODUCT_PLACEHOLDER_IMAGE_URL } from "../../service/BaseService";
import CurrencyView from "../currencyView/CurrencyView";
import "./productItemView.scss";

type Prop = {
    item: Item,
    itemInBasket: boolean
}

const ProductItemView: React.FC<Prop> = ({ item, itemInBasket }) => {
  const dispatch = useAppDispatch();

  const onClickButton = (): void => {
    if (itemInBasket) {
      dispatch(removeBasketItem(item));
      return;
    }

    dispatch(appendBasketItem({
      id: item.id,
      price: item.price,
      name: item.name,
      quantity: 1,
    }));
  };

  const createButtonClassName = (): string => {
    let className = "product-item-view__button";
    if (itemInBasket) {
      className += " product-item-view__button--active";
    }

    return className;
  };

  return (
    <div className="product-item-view">
      <div className="product-item-view__bg">
        <img
          src={PRODUCT_PLACEHOLDER_IMAGE_URL}
          alt={item.name}
        />
      </div>
      <div className="product-item-view__body">
        <div className="product-item-view__price">
          <CurrencyView currency={item.price} gap={0.2} />
        </div>
        <p className="product-item-view__name" title={item.name}>{item.name}</p>
      </div>
      <button
        type="button"
        className={createButtonClassName()}
        onClick={onClickButton}
      >
        {itemInBasket ? "Remove" : "Add"}
      </button>
    </div>
  );
};

export default ProductItemView;
