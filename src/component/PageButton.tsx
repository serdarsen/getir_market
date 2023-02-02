interface Prop {
  id: string,
  name: string,
  pageNo: number,
  value: number,
  onChange: () => void
}

const PageButton: React.FC<Prop> = ({
  id, name, pageNo, value, onChange,
}: Prop) => {
  const isSeperator = value < 0;
  const checked = pageNo === value;

  return (
    <label
      htmlFor={id}
    >
      <input
        id={id}
        name={name}
        className="
          peer
          hidden"
        type="radio"
        onChange={onChange}
        checked={checked}
      />
      <div
        className="
          hover:bg-custom-blue-100/50
          peer-checked:bg-custom-blue-100
          peer-checked:dark:bg-custom-blue-200
          text-custom-gray-500
          flex
          h-[2.5rem]
          w-[2rem]
          cursor-pointer
          items-center
          justify-center
          rounded-sm
          p-[0.75rem]
          hover:text-white
          peer-checked:text-white
          dark:hover:text-gray-300
          peer-checked:dark:text-gray-300"
      >
        <p className={isSeperator ? "mb-[0.4rem]" : ""}>
          {isSeperator ? "..." : value}
        </p>
      </div>
    </label>
  );
};

export default PageButton;
