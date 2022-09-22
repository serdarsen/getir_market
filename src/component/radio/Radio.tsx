import { FC } from "react";
import "./radio.scss";

type Prop = {
  id: string,
  name: string,
  text: string,
  checked: boolean,
  onChange: () => void
};

const Radio: FC<Prop> = ({
  id, name, text, checked, onChange,
}: Prop) => (
  <label className="radio" htmlFor={id}>
    <input
      id={id}
      name={name}
      className="radio__input"
      type="checkbox"
      checked={checked}
      onChange={() => onChange()}

    />
    <div className="radio__body" />
    <p className="radio__text">{text}</p>
  </label>
);

export default Radio;
