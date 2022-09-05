import React from "react";
import Item from "../../model/Item";
import "./itemCard.scss";

type Prop = {
    item: Item
}

const ItemCard: React.FC<Prop> = ({ item }) => (
  <div className="app__item-card">
    <div className="app__item-bg">
      <img
        src="//www.colorbook.io/imagecreator.php?hex=C4C4C4&width=92&height=92&text=Item"
        alt={item.name}
      />
    </div>
    <div className="app_item-typography">
      <p className="app__item-price">
        ₺
        {" "}
        {item.price}
      </p>
      <p className="app__item-name">{item.name}</p>
    </div>
    <button type="button" className="app__item-button">Add</button>
  </div>
);

export default ItemCard;
