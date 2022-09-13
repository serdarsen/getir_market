import React, { MouseEvent } from "react";
import { MinusIcon, PlusIcon } from "../../icon";
import "./counter.scss";

type Prop = {
    value: number,
    onChange: (count: number) => void
}

const Counter: React.FC<Prop> = ({ value, onChange }: Prop) => {
  const onDecrease = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    if (value > 0) {
      onChange(value - 1);
    }
  };

  const onIncrease = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    onChange(value + 1);
  };

  return (
    <div className="counter">
      <button
        type="button"
        className="counter__decrease-button"
        onClick={onDecrease}
      >
        <MinusIcon className="counter__decrease-icon" />
      </button>
      <p className="counter__label">{value}</p>
      <button
        type="button"
        className="counter__increase-button"
        onClick={onIncrease}
      >
        <PlusIcon className="counter__increase-icon" />
      </button>
    </div>
  );
};

export default Counter;
