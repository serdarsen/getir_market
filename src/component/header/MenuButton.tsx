import { FC } from "react";
import { MenuIcon } from "../../icon";
import "./menuButton.scss";

type Prop = {
    onClick: () => void
}

const MenuButton: FC<Prop> = ({ onClick }: Prop) => (
  <button
    type="button"
    onClick={onClick}
    className="menu-button"
  >
    <MenuIcon className="menu-button__icon" />
  </button>
);

export default MenuButton;
