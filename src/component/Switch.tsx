interface Prop {
  id: string;
  name: string,
  checked: boolean;
  onChange: () => void;
}

const Switch: React.FC<Prop> = ({
  id,
  name,
  checked,
  onChange,
}: Prop): JSX.Element => (
  <label
    className="
     relative
     flex
     h-[0.8rem]
     w-[1.3rem]
     min-w-[1.3rem]
     cursor-pointer
     items-center
     justify-between
     rounded-md
     bg-slate-600
     transition-colors"
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
    <span
      className="
        absolute
        left-[0.05rem]
        h-[0.7rem]
        w-[0.7rem]
        rounded-md
        bg-slate-400
        shadow-[0_0_2px_0_rgba(10,10,10,0.29)]
        duration-300
        peer-checked:translate-x-[0.5rem]
        peer-checked:bg-gray-50"
    />
  </label>
);

export default Switch;
