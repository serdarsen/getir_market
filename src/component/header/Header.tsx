import React from "react";
import BasketIcon from "../../asset/BasketIcon";
import LogoIcon from "../../asset/LogoIcon";
import "./header.scss";

const Header: React.FC = () => (
  <div className="app__header">
    <div className="app__header_logo">
      <LogoIcon />
    </div>
    <div className="app__header_basket">
      <BasketIcon />
      <p>₺ 39,97</p>
    </div>
  </div>
);

export default Header;
