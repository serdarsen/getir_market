import {
  removeBasketItem,
  updateBasketItem,
  useAppDispatch,
} from "../context";
import { BasketItem } from "../model";
import Counter from "./Counter";
import CurrencyView from "./CurrencyView";

type Prop = {
  basketItem: BasketItem
};

const BasketItemView: React.FC<Prop> = ({ basketItem }: Prop) => {
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
    <div className="border-custom-black-50
                    mt-2
                    flex
                    h-[3.5rem]
                    w-[15.5rem]
                    flex-row
                    justify-start
                    border-b-2
                    border-solid"
    >
      <div className="flex
                      h-[2.5rem]
                      w-[14.5rem]
                      flex-row
                      items-center
                      justify-between"
      >
        <div className="flex
                        flex-col
                        gap-[0.25rem]"
        >
          <p
            className="text-custom-gray-700
                       w-[9rem]
                       truncate"
            title={basketItem.name}
          >
            {basketItem.name}

          </p>
          <div
            className="text-custom-blue-100"
          >
            <CurrencyView currency={basketItem.price} gap={0} />
          </div>
        </div>
        <div className="h-[2rem]
                        w-[4.5rem]"
        >
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
