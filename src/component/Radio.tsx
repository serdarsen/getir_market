import { CheckIcon } from "../icon";

type Prop = {
  id: string,
  name: string,
  text: string,
  checked: boolean,
  onChange: () => void
};

const Radio: React.FC<Prop> = ({
  id, name, text, checked, onChange,
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
      type="radio"
      checked={checked}
      onChange={() => onChange()}

    />
    <div className="border-custom-blue-100
                    mr-2
                    flex
                    h-[1.3rem]
                    w-[1.3rem]
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-2xl
                    border-2
                    border-solid"
    >
      <CheckIcon
        className={`
         stroke-custom-blue-100 
         h-[0.5rem] 
         w-[0.5rem]
         duration-150
         ${checked ? "scale-1" : "scale-0"}`}
      />
    </div>
    <p>
      {text}
    </p>
  </label>
);

export default Radio;
