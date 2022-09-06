import React from "react";
import Card from "../card/Card";
import Radio from "../radio/Radio";
import "./sortingView.scss";

const SortingView: React.FC = () => (
  <div className="sorting-view">
    <p className="sorting-view__title">Sorting</p>
    <Card>
      <div className="sorting-view__body">
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
        <Radio
          id="sortingViewRadioId3"
          name="sortingViewRadioName"
          text="New to old"
        />
        <Radio
          id="sortingViewRadioId4"
          name="sortingViewRadioName"
          text="Old to new"
        />
      </div>
    </Card>
  </div>
);

export default SortingView;
