import React, { KeyboardEvent, MouseEvent } from "react";
import { useAppSelector } from "../../service";
import BasketItemView from "../basketItemView/BasketItemView";
import "./basketView.scss";

type Prop = {
    visible: boolean
}

const BasketView: React.FC<Prop> = ({ visible }: Prop) => {
  const basketItems = useAppSelector((state) => state.basketItems.basketItems);

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
      {basketItems.map((item) => <BasketItemView item={item} />)}
    </div>
  ) : null;
};

export default BasketView;
