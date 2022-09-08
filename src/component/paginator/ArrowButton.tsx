import React from "react";
import ArrowIcon from "../../asset/ArrowIcon";
import "./arrowButton.scss";

type Prop = {
    direction: "left" | "right";
    text: string
}

const ArrowButton: React.FC<Prop> = ({ direction, text }: Prop) => {
  const createClassName = (): string => {
    let className = "arrow-button";
    if (direction === "left") {
      className += " arrow-button--left";
    } else if (direction === "right") {
      className += " arrow-button--right";
    }

    return className;
  };

  return (
    <div className={createClassName()}>
      <ArrowIcon className="arrow-button__icon" />
      {text}
    </div>
  );
};

export default ArrowButton;
