import React from "react";
import "./checkbox.scss";

const Checkbox: React.FC = () => (
  <label className="app__checkbox" htmlFor="appCheckboxId">
    <input
      className="app__checkbox-input"
      type="checkbox"
      name="appCheckboxName"
      id="appCheckboxId"
    />
    <div className="app__checkbox-box" />
    All
  </label>
);

export default Checkbox;
