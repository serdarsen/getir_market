import { selectBasket, useAppSelector } from "../context";
import { BasketItem } from "../model";
import BasketItemView from "./BasketItemView";
import CurrencyView from "./CurrencyView";

type Prop = {
  visible: boolean
};

const BasketView: React.FC<Prop> = ({ visible }: Prop) => {
  const { basketItems, totalPrice } = useAppSelector(selectBasket);

  return visible ? (
    <div
      className="animation__scale-up-center
                 border-custom-blue-100
                 absolute
                 right-0
                 top-[6rem]
                 flex
                 min-h-[10rem]
                 w-[18.5rem]
                 flex-col
                 justify-end
                 gap-4
                 rounded-sm
                 border-[0.3rem]
                 border-solid
                 bg-white
                 p-4"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
      role="button"
      tabIndex={0}
    >
      {basketItems.map((basketItem: BasketItem) => (
        <BasketItemView
          key={`basketItemViewKey${basketItem.id}`}
          basketItem={basketItem}
        />
      ))}
      <div className="text-custom-blue-100
                      border-custom-blue-100
                      ml-[9.75rem]
                      flex
                      h-[3.25rem]
                      w-[5.75rem]
                      flex-col
                      items-center
                      justify-center
                      rounded-sm
                      border-[0.17rem]
                      border-solid"
      >
        <CurrencyView currency={totalPrice} gap={0} />
      </div>
    </div>
  ) : null;
};

export default BasketView;
