import { FC } from "react";
import { LogoIcon } from "../../icon";
import BasketButton from "../basketButton/BasketButton";
import OptionButton from "../optionButton/OptionButton";
import "./header.scss";

const Header: FC = () => (
  <header className="header">
    <div className="header__left">
      <OptionButton />
    </div>
    <div className="header__center">
      <LogoIcon className="header__logo" />
    </div>
    <div className="header__right">
      <BasketButton />
    </div>
  </header>
);

export default Header;
