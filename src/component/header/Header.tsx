import React from "react";

import LogoIcon from "../../asset/LogoIcon";
import BasketView from "../basketView/BasketView";
import "./header.scss";

const Header: React.FC = () => (
  <header className="header">
    <div className="header__center">
      <LogoIcon />
    </div>
    <div className="header__right">
      <BasketView />
    </div>
  </header>
);

export default Header;
