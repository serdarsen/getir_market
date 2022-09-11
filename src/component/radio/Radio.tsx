import React from "react";
import "./radio.scss";

type Prop = {
    id: string,
    name: string,
    text: string,
    checked: boolean,
    onChange: (id: string, checked: boolean) => void
}

const Radio: React.FC<Prop> = ({
  id, name, text, checked, onChange,
}: Prop) => (
  <label className="radio" htmlFor={id}>
    <input
      id={id}
      name={name}
      className="radio__input"
      type="radio"
      checked={checked}
      onChange={(e) => onChange(id, e.target.checked)}

    />
    <div className="radio__body" />
    <p className="radio__text">{text}</p>
  </label>
);

export default Radio;
