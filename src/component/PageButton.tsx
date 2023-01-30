type Prop = {
  id: string,
  name: string,
  pageNo: number,
  value: number,
  onChange: () => void
};

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
        className="hidden"
        type="radio"
        onChange={onChange}
        checked={checked}
      />
      <div className={`
        hover:bg-custom-blue-100/50 
        flex 
        h-[2.5rem] 
        w-[2rem]
        cursor-pointer 
        items-center
        justify-center 
        rounded-sm
        p-[0.75rem]
        hover:text-white
        ${checked ? "bg-custom-blue-100" : ""}
        ${checked ? "text-white" : "text-custom-gray-500"}`}
      >
        <p className={`${isSeperator ? "mb-[0.4rem]" : ""}`}>
          {isSeperator ? "..." : value}
        </p>
      </div>
    </label>
  );
};

export default PageButton;
