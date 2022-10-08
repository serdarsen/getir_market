import { FC } from "react";
import { productConst } from "../../constant";
import {
  appendBasketItem,
  removeBasketItem,
  useAppDispatch,
} from "../../context";
import { Product } from "../../model";
import CurrencyView from "../currencyView/CurrencyView";
import "./productItemView.scss";

type Prop = {
  product: Product,
  productInBasket: boolean
};

const ProductItemView: FC<Prop> = ({ product, productInBasket }) => {
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
    let className = "product-item-view__button";
    if (productInBasket) {
      className += " product-item-view__button--active";
    }

    return className;
  };

  return (
    <div className="product-item-view">
      <div className="product-item-view__bg">
        <img
          src={productConst.PRODUCT_PLACEHOLDER_IMAGE_URL}
          alt={product.name}
        />
      </div>
      <div className="product-item-view__body">
        <div className="product-item-view__price">
          <CurrencyView currency={product.price} gap={0.2} />
        </div>
        <p className="product-item-view__name" title={product.name}>
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
