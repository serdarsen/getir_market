import React from "react";

import { LogoIcon } from "../../icon";
import BasketButton from "../basketButton/BasketButton";
import "./header.scss";

const Header: React.FC = () => (
  <header className="header">
    <div className="header__center">
      <LogoIcon className="header__logo" />
    </div>
    <div className="header__right">
      <BasketButton />
    </div>
  </header>
);

export default Header;
