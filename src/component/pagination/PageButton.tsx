import React from "react";
import "./pageButton.scss";

type Prop = {
    id: string,
    name: string,
    pageNo: number,
    value: number,
    onChange: () => void
}

const PageButton: React.FC<Prop> = ({
  id, name, pageNo, value, onChange,
}: Prop) => {
  const isSeperator = value < 0;

  const createClassName = (): string => {
    let className = "page-button";
    if (isSeperator) {
      className += " page-button--seperator-mode";
    }

    return className;
  };

  return (
    <label
      className={createClassName()}
      htmlFor={id}
    >
      <input
        id={id}
        name={name}
        className="page-button__input"
        type="radio"
        onChange={onChange}
        checked={pageNo === value}
      />
      <div className="page-button__body">
        <p className="page-button__text">
          {isSeperator ? "..." : value}
        </p>
      </div>
    </label>
  );
};

export default PageButton;
