import React, { useState } from "react";
import { CloseIcon, MenuIcon } from "../../icon";
import SlidingView from "../slidingView/SlidingView";
import "./slidingViewButton.scss";

const SlidingViewButton: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      className="sliding-view-button"
      onClick={(e) => {
        e.stopPropagation();
        setActive(!active);
      }}
    >
      {active
        ? <CloseIcon className="sliding-view-button__close-icon" />
        : <MenuIcon className="sliding-view-button__menu-icon" />}
      <SlidingView visible={active} />
    </button>
  );
};

export default SlidingViewButton;
