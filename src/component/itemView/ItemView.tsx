import React from "react";
import { Item } from "../../model/Item";
import "./itemView.scss";

type Prop = {
    item: Item
}

const ItemView: React.FC<Prop> = ({ item }) => (
  <div className="item-view">
    <div className="item-view__bg">
      <img
        src="//www.colorbook.io/imagecreator.php?hex=C4C4C4&width=92&height=92&text=Item"
        alt={item.name}
      />
    </div>
    <div className="item-view__body">
      <p className="item-view__price">
        ₺
        {" "}
        {item.price}
      </p>
      <p className="item-view__name">{item.name}</p>
    </div>
    <button type="button" className="item-view__button">Add</button>
  </div>
);

export default ItemView;
