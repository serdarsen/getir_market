import React from "react";
import "./chip.scss";

type Prop = {
    id: string,
    name: string,
    text: string,
    onChange: (id: string, checked: boolean) => void
}

const Chip: React.FC<Prop> = ({
  id, name, text, onChange,
}: Prop) => (
  <label className="chip" htmlFor={id}>
    <input
      id={id}
      name={name}
      className="chip__input"
      type="checkbox"
      onChange={(e) => onChange(id, e.target.checked)}
    />
    <div className="chip__body">
      <p className="chip__text">{text}</p>
    </div>
  </label>
);

export default Chip;
