import React from "react";
import { Item } from "../../model";
import { appendBasketItem, useAppDispatch } from "../../service";
import "./productItemView.scss";

type Prop = {
    item: Item
}

const ProductItemView: React.FC<Prop> = ({ item }) => {
  const dispatch = useAppDispatch();

  const onClickAdd = (): void => {
    dispatch(appendBasketItem(item));
  };

  const price = `₺ ${item.price}`;

  return (
    <div className="product-item-view">
      <div className="product-item-view__bg">
        <img
          src="//www.colorbook.io/imagecreator.php?hex=C4C4C4&width=92&height=92&text=Item"
          alt={item.name}
        />
      </div>
      <div className="product-item-view__body">
        <p className="product-item-view__price" title={price}>
          {price}
        </p>
        <p className="product-item-view__name" title={item.name}>{item.name}</p>
      </div>
      <button
        type="button"
        className="product-item-view__button"
        onClick={onClickAdd}
      >
        Add
      </button>
    </div>
  );
};

export default ProductItemView;
