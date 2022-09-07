import React from "react";
import "./pageButton.scss";

type Prop = {
    id: string,
    name: string,
    page: number,
    onChange: (page: number, checked: boolean) => void
}

const PageButton: React.FC<Prop> = ({
  id, name, page, onChange,
}: Prop) => (
  <label className="page-button" htmlFor={id}>
    <input
      id={id}
      name={name}
      className="page-button__input"
      type="radio"
      onChange={(e) => onChange(page, e.target.checked)}
    />
    <div className="page-button__body">
      <p className="page-button__text">{page}</p>
    </div>
  </label>
);

export default PageButton;
