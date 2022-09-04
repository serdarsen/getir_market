import React, { useState } from "react";
import BasketIcon from "../../asset/BasketIcon";
import LogoIcon from "../../asset/LogoIcon";
import "./header.scss";

const Header: React.FC = () => {
  const [toggleBasket, setToggleBasket] = useState(false);

  return (
    <header className="app__header">
      <div className="app__header_logo">
        <LogoIcon />
      </div>
      <div
        className="app__header_basket"
        onClick={() => setToggleBasket(!toggleBasket)}
        onKeyDown={() => setToggleBasket(!toggleBasket)}
        onBlur={() => setToggleBasket(false)}
        role="button"
        tabIndex={0}
      >
        <BasketIcon />
        <p>₺ 39,97</p>
        {toggleBasket
        && (
        <div
          className="app__header_basket-container"
        >
          <div className="app__header_basket-items">
            Basket items
          </div>
        </div>
        )}
      </div>
    </header>
  );
};

export default Header;
