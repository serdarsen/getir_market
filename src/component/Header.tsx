import { FC } from "react";
import { LogoIcon } from "../icon";
import BasketButton from "./BasketButton";
import DarkModeSwitch from "./DarkModeSwitch";
import OptionButton from "./OptionButton";

const Header: FC = () => (
  <header
    className="
      bg-custom-blue-100
      dark:bg-custom-blue-200
      flex
      h-16
      flex-row
      justify-between"
  >
    <div
      className="
        flex
        w-full
        items-center"
    >
      <OptionButton />
    </div>
    <div
      className="
        flex
        w-full
        items-center
        justify-center
        max-[590px]:hidden"
    >
      <LogoIcon
        className="
          h-[2.5rem]
          w-[8.8rem]
          fill-white
          dark:fill-gray-300"
      />
    </div>
    <div
      className="
        mr-3
        flex
        w-full
        flex-row
        items-center
        justify-end"
    >
      <BasketButton />
      <DarkModeSwitch />
    </div>
  </header>
);

export default Header;
