import React, { useState } from "react";
import { CloseIcon, MenuIcon } from "../../icon";
import SlidingView from "../slidingView/SlidingView";
import "./optionButton.scss";

const OptionButton: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      className="option-button"
      onClick={() => {
        setActive(!active);
      }}
    >
      {active
        ? <CloseIcon className="option-button__close-icon" />
        : <MenuIcon className="option-button__menu-icon" />}
      <SlidingView visible={active} />
    </button>
  );
};

export default OptionButton;
