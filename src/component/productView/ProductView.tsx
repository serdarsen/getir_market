import React, { useEffect } from "react";
import Item from "../../model/Item";
import { findItemsFetch } from "../../service/ItemSlice";
import { useAppDispatch, useAppSelector } from "../../service/ReduxHook";
import Card from "../card/Card";
import Chip from "../chip/Chip";
import ItemView from "../itemView/ItemView";
import "./productView.scss";

const ProductView: React.FC = () => {
  const items = useAppSelector((state) => state.items.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findItemsFetch());
  }, [dispatch]);

  const onChangeChip = (id: string, checked: boolean): void => {
    console.log(`${id} is checked: ${checked}`);
  };

  return (
    <div className="product-view">
      <h4 className="product-view__title">Products</h4>

      <div className="product-view__chip">
        {["mug", "shirt"].map((itemType) => (
          <Chip
            key={`chipId${itemType}`}
            id={`chipId${itemType}`}
            name={`chipName${itemType}`}
            text={itemType}
            onChange={onChangeChip}
          />
        ))}
      </div>

      <Card>
        <div className="product-view__body">
          {items.map(
            (item: Item) => <ItemView key={item.id} item={item} />,
          )}
        </div>
      </Card>

    </div>
  );
};

export default ProductView;
