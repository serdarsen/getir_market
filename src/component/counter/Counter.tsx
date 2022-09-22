import { FC } from "react";
import { MinusIcon, PlusIcon } from "../../icon";
import "./counter.scss";

type Prop = {
  value: number,
  onChange: (count: number) => void
};

const Counter: FC<Prop> = ({ value, onChange }: Prop) => {
  const onDecrease = (): void => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  const onIncrease = (): void => {
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
