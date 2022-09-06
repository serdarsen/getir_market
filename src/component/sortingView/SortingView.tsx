import React from "react";
import Card from "../card/Card";
import Radio from "../radio/Radio";
import "./sortingView.scss";

const SortingView: React.FC = () => (
  <div className="sorting">
    <p className="sorting__title">Sorting</p>
    <Card>
      <div className="sorting__body">
        <Radio
          id="sortingViewRadioId1"
          name="sortingViewRadioName"
          text="Price low to high"
        />
        <Radio
          id="sortingViewRadioId2"
          name="sortingViewRadioName"
          text="Price high to low"
        />
      </div>
    </Card>
  </div>
);

export default SortingView;
