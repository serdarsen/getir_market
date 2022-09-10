import React, { KeyboardEvent, MouseEvent } from "react";
import { useAppSelector } from "../../context";
import { BasketItem } from "../../model";
import BasketItemView from "../basketItemView/BasketItemView";
import CurrencyView from "../currencyView/CurrencyView";
import "./basketView.scss";

type Prop = {
    visible: boolean
}

const BasketView: React.FC<Prop> = ({ visible }: Prop) => {
  const basketItems = useAppSelector((state) => state.basket.basketItems);
  const totalPrice = useAppSelector((state) => state.basket.totalPrice);

  const onClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
  };

  return visible ? (
    <div
      className="basket-view"
      onClick={onClick}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
    >
      {basketItems.map((basketItem: BasketItem) => (
        <BasketItemView
          key={`basketItemViewKey${basketItem.id}`}
          basketItem={basketItem}
        />
      ))}
      <div className="basket-view__total">
        <CurrencyView currency={totalPrice} gap={0} />
      </div>
    </div>
  ) : null;
};

export default BasketView;
