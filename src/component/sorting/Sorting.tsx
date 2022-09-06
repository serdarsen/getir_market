import React from "react";
import Card from "../card/Card";
import "./sorting.scss";

const Sorting: React.FC = () => (
  <div className="app__sorting">
    <p className="app__sorting-title">Sorting</p>
    <Card>
      <div className="app__sorting-content">
        Sorting
      </div>
    </Card>
  </div>
);

export default Sorting;
