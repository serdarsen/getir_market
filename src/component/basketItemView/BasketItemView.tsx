import { FC } from "react";
import {
  removeBasketItem,
  updateBasketItem,
  useAppDispatch,
} from "../../context";
import { BasketItem } from "../../model";
import Counter from "../counter/Counter";
import CurrencyView from "../currencyView/CurrencyView";
import "./basketItemView.scss";

type Prop = {
  basketItem: BasketItem
};

const BasketItemView: FC<Prop> = ({ basketItem }: Prop) => {
  const dispatch = useAppDispatch();

  const onChangeCounter = (count: number): void => {
    if (count === 0) {
      dispatch(removeBasketItem(basketItem));
      return;
    }

    dispatch(updateBasketItem({
      ...basketItem,
      quantity: count,
    }));
  };

  return (
    <div className="basket-item-view">
      <div className="basket-item-view__body">
        <div className="basket-item-view__left">
          <p
            className="basket-item-view__name"
            title={basketItem.name}
          >
            {basketItem.name}

          </p>
          <div
            className="basket-item-view__price"
          >
            <CurrencyView currency={basketItem.price} gap={0} />
          </div>
        </div>
        <div className="basket-item-view__right">
          <Counter
            value={basketItem.quantity}
            onChange={onChangeCounter}
          />
        </div>
      </div>
    </div>
  );
};

export default BasketItemView;
