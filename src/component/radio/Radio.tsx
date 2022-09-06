import React from "react";
import "./radio.scss";

type Prop = {
    id: string,
    name: string,
    text: string
}

const Radio: React.FC<Prop> = ({ id, name, text }: Prop) => (
  <label className="app__radio" htmlFor={id}>
    <input
      id={id}
      name={name}
      className="app__radio-input"
      type="radio"

    />
    <div className="app__radio-box" />
    {text}
  </label>
);

export default Radio;
