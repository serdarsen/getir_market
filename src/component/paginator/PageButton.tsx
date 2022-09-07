import React from "react";
import "./pageButton.scss";

type Prop = {
    id: string,
    name: string,
    text: string,
    onChange: (id: string, checked: boolean) => void
}

const PageButton: React.FC<Prop> = ({
  id, name, text, onChange,
}: Prop) => (
  <label className="page-button" htmlFor={id}>
    <input
      id={id}
      name={name}
      className="page-button__input"
      type="radio"
      onChange={(e) => onChange(id, e.target.checked)}
    />
    <div className="page-button__body">
      <p className="page-button__text">{text}</p>
    </div>
  </label>
);

export default PageButton;
