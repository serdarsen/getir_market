import {
  appendBasketItem,
  removeBasketItem,
  useAppDispatch,
} from "../context";
import { Product } from "../model";
import CurrencyView from "./CurrencyView";

interface Prop {
  product: Product,
  productInBasket: boolean
}

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
    if (productInBasket) {
      return `border-custom-blue-100
              hover:border-custom-blue-100/70
              active:border-custom-blue-100/50
              dark:text-custom-blue-100
              dark:border-custom-blue-200 
              dark:hover:border-custom-blue-200/70
              dark:active:border-custom-blue-200/50
              border-[0.17rem] 
              border-solid
              my-[0.125rem] 
              mx-0
              rounded-sm
              text-custom-blue-100`;
    } else {
      return `bg-custom-blue-100
              dark:text-gray-300                 
              dark:bg-custom-blue-200
              dark:hover:bg-custom-blue-200/70
              dark:active:bg-custom-blue-200/50
              hover:bg-custom-blue-100/70
              active:bg-custom-blue-100/50
              my-[0.125rem] 
              mx-0
              rounded-sm
              p-[0.125rem]
              text-white`;
    }
  };

  return (
    <div
      className="
        mx-[0.6rem]
        mt-[1.3rem]
        mb-0
        flex
        h-[14.5rem]
        w-[7rem]
        flex-col
        justify-between
        gap-2"
    >
      <div
        className="
          bg-custom-gray-200
          dark:bg-custom-gray-500
          dark:border-custom-gray-500
          border-custom-gray-300
          flex
          h-[10rem]
          w-[7.3rem]
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
      <div
        className="
          flex
          flex-col"
      >
        <div
          className="
            text-custom-blue-100"
        >
          <CurrencyView currency={product.price} gap={0.2} />
        </div>
        <p
          className="
            text-custom-gray-700
            h-[3rem]
            w-[7rem]
            overflow-hidden
            dark:text-gray-400"
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
