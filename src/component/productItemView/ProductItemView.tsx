import React from "react";
import { Item } from "../../model";
import "./productItemView.scss";

type Prop = {
    item: Item
}

const ProductItemView: React.FC<Prop> = ({ item }) => (
  <div className="product-item-view">
    <div className="product-item-view__bg">
      <img
        src="//www.colorbook.io/imagecreator.php?hex=C4C4C4&width=92&height=92&text=Item"
        alt={item.name}
      />
    </div>
    <div className="product-item-view__body">
      <p className="product-item-view__price">
        ₺
        {" "}
        {item.price}
      </p>
      <p className="product-item-view__name">{item.name}</p>
    </div>
    <button type="button" className="product-item-view__button">Add</button>
  </div>
);

export default ProductItemView;
