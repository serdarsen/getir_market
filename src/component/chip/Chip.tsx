import React from "react";
import "./chip.scss";

type Prop = {
    text: string
}

const Chip: React.FC<Prop> = ({ text }) => (
  <div className="chip">
    <p className="chip__text">{text}</p>
  </div>
);

export default Chip;
