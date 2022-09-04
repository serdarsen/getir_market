import React from "react";
import "./chip.scss";

type Prop = {
    text: string
}

const Chip: React.FC<Prop> = ({ text }) => (
  <div className="app__chip">
    <p className="app__chip-text">{text}</p>
  </div>
);

export default Chip;
