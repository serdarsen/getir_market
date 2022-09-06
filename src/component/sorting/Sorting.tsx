import React from "react";
import Card from "../card/Card";
import Radio from "../radio/Radio";
import "./sorting.scss";

const Sorting: React.FC = () => (
  <div className="app__sorting">
    <p className="app__sorting-title">Sorting</p>
    <Card>
      <div className="app__sorting-content">
        <Radio id="appRadio1" name="appSortingRadio" text="Price low to high" />
        <Radio id="appRadio2" name="appSortingRadio" text="Price high to low" />
      </div>
    </Card>
  </div>
);

export default Sorting;
