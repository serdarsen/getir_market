import { ReactNode } from "react";
import { CheckIcon } from "../icon";

interface Prop {
  id: string,
  name: string,
  children: ReactNode,
  checked: boolean,
  onChange: () => void
}

const Checkbox: React.FC<Prop> = ({
  id, name, children, checked, onChange,
}: Prop) => (
  <label
    className="
      text-custom-black-600
      inline-flex
      items-center
      text-sm"
    htmlFor={id}
  >
    <input
      id={id}
      name={name}
      className="
        peer
        hidden"
      type="checkbox"
      checked={checked}
      onChange={onChange}

    />
    <div
      className="
        peer-checked:border-custom-blue-100
        peer-checked:dark:border-custom-blue-200
        peer-checked:bg-custom-blue-100
        peer-checked:dark:bg-custom-blue-200
        mr-2
        flex
        h-[1.3rem]
        w-[1.3rem]
        cursor-pointer
        items-center
        justify-center
        rounded-sm
        border-2
        border-solid
        border-white
        bg-white
        shadow-[0px_1px_7px_rgba(93,56,192,0.4)]
        dark:border-gray-500 dark:bg-gray-500"
    >
      <CheckIcon
        className={`
          h-[0.7rem] 
          w-[0.7rem] 
          stroke-white
          duration-150
          dark:stroke-gray-300
          ${checked ? "scale-1" : "scale-0"}`}
      />
    </div>
    {children}
  </label>
);

export default Checkbox;
