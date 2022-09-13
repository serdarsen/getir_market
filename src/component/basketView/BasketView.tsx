import React from "react";
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

  return visible ? (
    <div
      className="basket-view animation__scale-up-center"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
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
