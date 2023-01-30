import { ReactNode } from "react";
import { CheckIcon } from "../icon";

type Prop = {
  id: string,
  name: string,
  children: ReactNode,
  checked: boolean,
  onChange: () => void
};

const Checkbox: React.FC<Prop> = ({
  id, name, children, checked, onChange,
}: Prop) => (
  <label
    className="text-custom-black-600
               inline-flex
               items-center
               text-sm"
    htmlFor={id}
  >
    <input
      id={id}
      name={name}
      className="hidden"
      type="checkbox"
      checked={checked}
      onChange={() => onChange()}

    />
    <div className={`
      mr-2 flex 
      h-[1.3rem]
      w-[1.3rem] 
      cursor-pointer
      items-center
      justify-center
      rounded-sm
      border-2
      border-solid
      shadow-[0px_1px_7px_rgba(93,56,192,0.4)]
      ${checked ? "border-custom-blue-100" : "border-white"}
      ${checked ? "bg-custom-blue-100" : "bg-white"}`}
    >
      <CheckIcon className={`
        h-[0.7rem] 
        w-[0.7rem] 
        stroke-white
        duration-150
        ${checked ? "scale-1" : "scale-0"}`}
      />
    </div>
    {children}
  </label>
);

export default Checkbox;
