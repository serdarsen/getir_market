import { ReactNode } from "react";

type Prop = {
  id: string,
  name: string,
  children: ReactNode,
  checked: boolean,
  onChange: () => void
};

const Chip: React.FC<Prop> = ({
  id, name, children, checked, onChange,
}: Prop) => (
  <label htmlFor={id}>
    <input
      id={id}
      name={name}
      className="hidden"
      type="checkbox"
      checked={checked}
      onChange={() => onChange()}

    />
    <div className={`
        flex 
        cursor-pointer
        flex-col
        items-center 
        rounded-sm
        py-[0.3rem]
        px-[1rem]
        ${checked ? "bg-custom-blue-100" : "bg-custom-gray-100"}`}
    >
      <div className={`${checked ? "text-white" : "text-custom-blue-100"}`}>
        {children}
      </div>
    </div>
  </label>
);

export default Chip;
