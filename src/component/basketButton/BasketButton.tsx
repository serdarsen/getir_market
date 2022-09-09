import React, { KeyboardEvent, MouseEvent, useState } from "react";
import { BasketIcon } from "../../icon";
import BasketView from "../basketView/BasketView";
import "./basketButton.scss";

const BasketButton: React.FC = () => {
  const [active, setActive] = useState(false);

  const onClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setActive(!active);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div
      className={`basket-button ${active ? "basket-button--active" : ""}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
    >
      <BasketIcon className="basket-button__icon" />
      <p className="basket-button__price">₺ 39,97</p>
      <BasketView visible={active} />
    </div>
  );
};

export default BasketButton;
