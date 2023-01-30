import { FC } from "react";
import { LogoIcon } from "../icon";
import BasketButton from "./BasketButton";
import OptionButton from "./OptionButton";

const Header: FC = () => (
  <header
    className="bg-custom-blue-100
               grid
               h-16
               grid-cols-3"
  >
    <div className="flex
                    items-center"
    >
      <OptionButton />
    </div>
    <div className="flex
                    items-center
                    justify-center"
    >
      <LogoIcon
        className="h-[2.5rem]
                   w-[8.8rem]
                   fill-white
                   max-[500px]:hidden"
      />
    </div>
    <div className="flex
                    justify-end"
    >
      <BasketButton />
    </div>
  </header>
);

export default Header;
