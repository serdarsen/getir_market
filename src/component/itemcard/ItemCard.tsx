import React from "react";
import Item from "../../model/Item";
import "./itemCard.scss";

type Prop = {
    item: Item
}

const ItemCard: React.FC<Prop> = ({ item }) => (
  <div className="app__item-card">
    {item.name}
  </div>
);

export default ItemCard;
