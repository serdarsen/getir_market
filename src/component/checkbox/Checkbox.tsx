import React from "react";
import "./checkbox.scss";

type Prop = {
    id: string,
    name: string,
    text: string
}

const Checkbox: React.FC<Prop> = ({ id, name, text }: Prop) => (
  <label className="checkbox" htmlFor={id}>
    <input
      id={id}
      name={name}
      className="checkbox__input"
      type="checkbox"

    />
    <div className="checkbox__body" />
    {text}
  </label>
);

export default Checkbox;
