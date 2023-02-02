import { MinusIcon, PlusIcon } from "../icon";

interface Prop {
  value: number,
  onChange: (count: number) => void
}

const Counter: React.FC<Prop> = ({ value, onChange }: Prop) => {
  const onDecrease = (): void => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  const onIncrease = (): void => {
    onChange(value + 1);
  };

  return (
    <div
      className="
        flex
        h-[2rem]
        w-[4.5rem]
        flex-row
        gap-[0.5rem]"
    >
      <button
        type="button"
        className="
          border-none
          outline-none"
        onClick={onDecrease}
      >
        <MinusIcon
          className="
            fill-custom-blue-100
            mt-[0.1rem]
            h-[0.2rem]
            w-[0.9rem]"
        />
      </button>
      <p
        className="
          bg-custom-blue-100
          dark:bg-custom-blue-200
          flex
          h-[2rem] w-[2rem]
          items-center
          justify-center
          text-white
          dark:text-gray-300"
      >
        {value}
      </p>
      <button
        type="button"
        className="
          border-none
          outline-none"
        onClick={onIncrease}
      >
        <PlusIcon
          className="
            fill-custom-blue-100
            stroke-custom-blue-100
            mt-[0.1rem]
            h-[0.7rem]
            w-[0.7rem]
            stroke-[0.06rem]"
        />
      </button>
    </div>
  );
};

export default Counter;
