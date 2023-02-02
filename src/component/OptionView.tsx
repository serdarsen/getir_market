import { FC } from "react";
import BrandView from "./BrandView";
import SortingView from "./SortingView";
import TagView from "./TagView";

const OptionView: FC = () => (
  <div
    className="
      flex
      flex-col
      items-end
      gap-[1.5rem]"
  >
    <SortingView />
    <BrandView />
    <TagView />
  </div>
);

export default OptionView;
