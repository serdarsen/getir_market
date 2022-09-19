import { FC, ReactNode } from "react";
import "./checkbox.scss";

type Prop = {
    id: string,
    name: string,
    children: ReactNode,
    checked: boolean,
    onChange: () => void
}

const Checkbox: FC<Prop> = ({
  id, name, children, checked, onChange,
}: Prop) => (
  <label className="checkbox" htmlFor={id}>
    <input
      id={id}
      name={name}
      className="checkbox__input"
      type="checkbox"
      checked={checked}
      onChange={() => onChange()}
    />
    <div className="checkbox__body" />
    <div className="checkbox__text">{children}</div>
  </label>
);

export default Checkbox;
