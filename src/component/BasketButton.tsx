import { FC, useState } from "react";
import { selectBasket, useAppSelector } from "../context";
import { BasketIcon } from "../icon";
import BasketView from "./BasketView";
import CurrencyView from "./CurrencyView";

const BasketButton: FC = () => {
  const [active, setActive] = useState(false);
  const { totalPrice } = useAppSelector(selectBasket);

  return (
    <div
      className={
        `hover:bg-custom-blue-200
         hover:dark:bg-custom-blue-300
         relative
         mr-4
         inline-flex
         h-full
         w-[8rem]
         items-center
         justify-center
         ${active ? "bg-custom-blue-200" : ""}`
      }
      onClick={() => {
        setActive(!active);
      }}
      onKeyDown={(e) => e.stopPropagation()}
      role="button"
      tabIndex={0}
    >
      <BasketIcon
        className="
          h-[1.5rem]
          w-[1.5rem]
          fill-white
          dark:fill-gray-300"
      />
      <div
        className="
          mr-[0.5rem]
          pt-[0.19rem]
          text-white"
      >
        <CurrencyView currency={totalPrice} gap={0.3} />
      </div>
      <BasketView visible={active} />
    </div>
  );
};

export default BasketButton;
