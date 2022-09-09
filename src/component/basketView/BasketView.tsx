import React, { KeyboardEvent, MouseEvent } from "react";
import "./basketView.scss";

type Prop = {
    visible: boolean
}

const BasketView: React.FC<Prop> = ({ visible }: Prop) => {
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
      <div className="basket-view__body">
        Basket items
      </div>
    </div>
  ) : null;
};

export default BasketView;
