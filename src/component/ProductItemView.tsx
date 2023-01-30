import {
  appendBasketItem,
  removeBasketItem,
  useAppDispatch,
} from "../context";
import { Product } from "../model";
import CurrencyView from "./CurrencyView";

type Prop = {
  product: Product,
  productInBasket: boolean
};

const ProductItemView: React.FC<Prop> = ({ product, productInBasket }) => {
  const dispatch = useAppDispatch();

  const onClickButton = (): void => {
    if (productInBasket) {
      dispatch(removeBasketItem(product));
      return;
    }

    dispatch(appendBasketItem({
      id: product.id,
      price: product.price,
      name: product.name,
      quantity: 1,
    }));
  };

  const createButtonClassName = (): string => {
    let className = `bg-custom-blue-100
                     hover:bg-custom-blue-100/70
                     active:bg-custom-blue-100/50
                     my-[0.125rem] 
                     mx-0
                     rounded-sm
                     p-[0.125rem]
                     text-white`;
    if (productInBasket) {
      className = `border-custom-blue-100 
                   hover:border-custom-blue-100/70
                   active:border-custom-blue-100/50
                   border-[0.17rem] 
                   border-solid
                   my-[0.125rem] 
                   mx-0
                   rounded-sm
                   text-custom-blue-100`;
    }

    return className;
  };

  return (
    <div className="mx-[0.6rem]
                    mt-[1.3rem]
                    mb-0
                    flex
                    h-[14rem]
                    w-[7rem]
                    flex-col
                    justify-between
                    gap-2"
    >
      <div className="bg-custom-gray-200
                      border-custom-gray-300
                      flex
                      h-[9rem]
                      w-[7.7rem]
                      flex-col
                      items-center
                      justify-center
                      rounded-xl
                      border-[1.1px]
                      border-solid"
      >
        <img
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div className="flex
                      flex-col"
      >
        <div className="text-custom-blue-100">
          <CurrencyView currency={product.price} gap={0.2} />
        </div>
        <p
          className="text-custom-gray-700
                     h-[3rem]
                     w-[7rem]
                     overflow-hidden"
          title={product.name}
        >
          {product.name}
        </p>
      </div>
      <button
        type="button"
        className={createButtonClassName()}
        onClick={onClickButton}
      >
        {productInBasket ? "Remove" : "Add"}
      </button>
    </div>
  );
};

export default ProductItemView;
