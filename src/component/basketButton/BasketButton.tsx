import React, { useState } from "react";
import { useAppSelector } from "../../context";
import { BasketIcon } from "../../icon";
import BasketView from "../basketView/BasketView";
import CurrencyView from "../currencyView/CurrencyView";
import "./basketButton.scss";

const BasketButton: React.FC = () => {
  const [active, setActive] = useState(false);
  const totalPrice = useAppSelector((state) => state.basket.totalPrice);

  return (
    <div
      className={`basket-button ${active ? "basket-button--active" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        setActive(!active);
      }}
      onKeyDown={(e) => e.stopPropagation()}
      role="button"
      tabIndex={0}
    >
      <BasketIcon className="basket-button__icon" />
      <div className="basket-button__price">
        <CurrencyView currency={totalPrice} gap={0.3} />
      </div>
      <BasketView visible={active} />
    </div>
  );
};

export default BasketButton;
