import React from "react";
import { setSortOption, useAppDispatch, useAppSelector } from "../../context";
import Card from "../card/Card";
import Radio from "../radio/Radio";
import "./sortingView.scss";

const SortingView: React.FC = () => {
  const dispatch = useAppDispatch();
  const sortOption = useAppSelector((state) => state.pagination.sortOption);

  const onChange = (order: string, field: string): void => {
    dispatch(setSortOption({ order, field }));
  };

  return (
    <div className="sorting-view">
      <p className="sorting-view__title">Sorting</p>
      <Card>
        <div className="sorting-view__body">
          <Radio
            id="sortingViewRadioId1"
            name="sortingViewRadioName"
            text="Price low to high"
            checked={sortOption[0] === "asc" && sortOption[1] === "price"}
            onChange={() => onChange("asc", "price")}
          />
          <Radio
            id="sortingViewRadioId2"
            name="sortingViewRadioName"
            text="Price high to low"
            checked={sortOption[0] === "desc" && sortOption[1] === "price"}
            onChange={() => onChange("desc", "price")}
          />
          <Radio
            id="sortingViewRadioId3"
            name="sortingViewRadioName"
            text="New to old"
            checked={sortOption[0] === "asc" && sortOption[1] === "added"}
            onChange={() => onChange("asc", "added")}
          />
          <Radio
            id="sortingViewRadioId4"
            name="sortingViewRadioName"
            text="Old to new"
            checked={sortOption[0] === "desc" && sortOption[1] === "added"}
            onChange={() => onChange("desc", "added")}
          />
        </div>
      </Card>
    </div>
  );
};

export default SortingView;
