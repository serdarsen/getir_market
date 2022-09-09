import React from "react";
import { Item } from "../../model";
import Counter from "../counter/Counter";
import "./basketItemView.scss";

type Prop = {
    item: Item
}

const BasketItemView: React.FC<Prop> = ({ item }: Prop) => {
  const price = `₺ ${item.price}`;

  const onChangeCounter = (count: number): void => {
    console.log("count: ", count);
  };

  return (
    <div className="basket-item-view">
      <div className="basket-item-view__left">
        <p className="basket-item-view__name" title={item.name}>{item.name}</p>
        <p className="basket-item-view__price" title={price}>
          {price}
        </p>
      </div>
      <div className="basket-item-view__right">
        <Counter
          onChange={onChangeCounter}
        />
      </div>
    </div>
  );
};

export default BasketItemView;
