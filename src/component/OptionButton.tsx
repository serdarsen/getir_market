import { useState } from "react";
import { CloseIcon, MenuIcon } from "../icon";
import SlidingView from "./SlidingView";

const OptionButton: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      className="
        relative
        ml-4
        hidden
        max-[955px]:block"
      onClick={() => {
        setActive(!active);
      }}
    >
      {active
        ? (
          <CloseIcon
            className="
              h-6
              w-6
              stroke-white"
          />
        )
        : (
          <MenuIcon
            className="
              h-6
              w-6
              stroke-white"
          />
        )}
      <SlidingView visible={active} />
    </button>
  );
};

export default OptionButton;
