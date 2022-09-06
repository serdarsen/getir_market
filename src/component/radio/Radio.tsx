import React from "react";
import "./radio.scss";

type Prop = {
    id: string,
    name: string,
    text: string
}

const Radio: React.FC<Prop> = ({ id, name, text }: Prop) => (
  <label className="radio" htmlFor={id}>
    <input
      id={id}
      name={name}
      className="radio__input"
      type="radio"

    />
    <div className="radio__body" />
    <p className="radio__text">{text}</p>
  </label>
);

export default Radio;
