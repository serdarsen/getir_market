import React, { useEffect } from "react";
import { Item } from "../../model";
import {
  findItemsFetch,
  useAppDispatch,
  useAppSelector,
} from "../../service";
import Card from "../card/Card";
import Chip from "../chip/Chip";
import ItemView from "../itemView/ItemView";
import Paginator from "../paginator/Paginator";
import "./productView.scss";

const ProductView: React.FC = () => {
  const items = useAppSelector((state) => state.items.pageable);
  const page = useAppSelector((state) => state.page.page);
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
            id={`chipId${itemType}`}
            key={`chipKey${itemType}`}
            name={`chipName${itemType}`}
            text={itemType}
            onChange={onChangeChip}
          />
        ))}
      </div>

      <Card>
        <div className="product-view__body">
          {items.data.map(
            (item: Item) => <ItemView key={item.id} item={item} />,
          )}
        </div>
      </Card>

      <Paginator />

    </div>
  );
};

export default ProductView;
