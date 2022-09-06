import React, { useState } from "react";
import BasketIcon from "../../asset/BasketIcon";
import "./basketView.scss";

const BasketView: React.FC = () => {
  const [toggleBasket, setToggleBasket] = useState(false);

  return (
    <div
      className="basket-view"
      onClick={() => setToggleBasket(!toggleBasket)}
      onKeyDown={() => setToggleBasket(!toggleBasket)}
      onBlur={() => setToggleBasket(false)}
      role="button"
      tabIndex={0}
    >

      <BasketIcon />

      <p className="basket-view__price">₺ 39,97</p>

      {toggleBasket && (
      <div
        className="basket-view__popup"
      >
        <div className="basket-view__body">
          Basket items
        </div>
      </div>
      )}

    </div>
  );
};

export default BasketView;
