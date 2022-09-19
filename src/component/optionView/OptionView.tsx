import { FC } from "react";
import BrandView from "../brandView/BrandView";
import SortingView from "../sortingView/SortingView";
import TagView from "../tagView/TagView";
import "./optionView.scss";

const OptionView: FC = () => (
  <div className="option-view">
    <SortingView />
    <BrandView />
    <TagView />
  </div>
);

export default OptionView;
