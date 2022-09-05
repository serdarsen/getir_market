import React, { useEffect } from "react";
import Item from "../../model/Item";
import { findItemsFetch } from "../../service/ItemSlice";
import { useAppDispatch, useAppSelector } from "../../service/ReduxHook";
import Card from "../card/Card";
import Chip from "../chip/Chip";
import ItemCard from "../itemcard/ItemCard";
import "./products.scss";

const Products: React.FC = () => {
  const items = useAppSelector((state) => state.items.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findItemsFetch());
  }, [dispatch]);

  return (
    <div className="app__products">
      <h4 className="app__products-title">Products</h4>
      <div className="app__products-chip">
        {["mug", "shirt"].map((itemType) => <Chip text={itemType} />)}
      </div>
      <Card>
        <div className="app__products-grid">
          {items.map((item: Item) => <ItemCard key={item.id} item={item} />)}
        </div>
      </Card>
    </div>
  );
};

export default Products;
