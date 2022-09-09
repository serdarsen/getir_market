import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "../../icon";
import "./counter.scss";

type Prop = {
    onChange: (count: number) => void
}

const Counter: React.FC<Prop> = ({ onChange }: Prop) => {
  const [count, setCount] = useState(0);

  const onDecrease = (): void => {
    if (count > 0) {
      setCount(count - 1);
      onChange(count - 1);
    }
  };

  const onIncrease = (): void => {
    setCount(count + 1);
    onChange(count + 1);
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
      <p className="counter__label">{count}</p>
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
