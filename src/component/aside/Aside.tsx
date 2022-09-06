import React from "react";
import BrandView from "../brandView/BrandView";
import SortingView from "../sortingView/SortingView";
import TagView from "../tagView/TagView";
import "./aside.scss";

const Aside: React.FC = () => (
  <aside className="aside">
    <SortingView />
    <BrandView />
    <TagView />
  </aside>
);

export default Aside;
