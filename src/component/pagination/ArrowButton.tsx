import { FC } from "react";
import { ArrowIcon } from "../../icon";
import "./arrowButton.scss";

type Prop = {
  direction: "left" | "right";
  text: string;
  onClick: () => void,
  disabled: boolean
};

const ArrowButton: FC<Prop> = ({
  direction, text, onClick, disabled,
}: Prop) => {
  const createClassName = (): string => {
    let className = "arrow-button";
    if (direction === "left") {
      className += " arrow-button--left";
    } else if (direction === "right") {
      className += " arrow-button--right";
    }

    return className;
  };

  return (
    <button
      disabled={disabled}
      type="button"
      className={createClassName()}
      onClick={onClick}
    >
      <ArrowIcon className="arrow-button__icon" />
      {text}
    </button>
  );
};

export default ArrowButton;
