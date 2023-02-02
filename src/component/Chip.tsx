import { ReactNode } from "react";

interface Prop {
  id: string,
  name: string,
  children: ReactNode,
  checked: boolean,
  onChange: () => void
}

const Chip: React.FC<Prop> = ({
  id, name, children, checked, onChange,
}: Prop) => (
  <label htmlFor={id}>
    <input
      id={id}
      name={name}
      className="
        peer
        hidden"
      type="checkbox"
      checked={checked}
      onChange={() => onChange()}

    />
    <div
      className="
        peer-checked:bg-custom-blue-100
        peer-checked:dark:bg-custom-blue-200
        bg-custom-gray-100
        flex
        cursor-pointer
        flex-col
        items-center
        rounded-sm
        py-[0.3rem]
        px-[1rem]
        dark:bg-gray-500"
    >
      <div
        className={checked
          ? "text-white dark:text-gray-300"
          : "text-custom-blue-100 dark:text-gray-300"}
      >
        {children}
      </div>
    </div>
  </label>
);

export default Chip;
