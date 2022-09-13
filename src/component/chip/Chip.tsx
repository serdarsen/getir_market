import React, { ReactNode } from "react";
import "./chip.scss";

type Prop = {
    id: string,
    name: string,
    children: ReactNode,
    checked: boolean,
    onChange: () => void
}

const Chip: React.FC<Prop> = ({
  id, name, children, checked, onChange,
}: Prop) => (
  <label className="chip" htmlFor={id}>
    <input
      id={id}
      name={name}
      className="chip__input"
      type="checkbox"
      checked={checked}
      onChange={(e) => {
        e.stopPropagation();
        onChange();
      }}
    />
    <div className="chip__body">
      <p className="chip__text">{children}</p>
    </div>
  </label>
);

export default Chip;
