import React from "react";
import Card from "../card/Card";
import Checkbox from "../checkbox/Checkbox";
import "./tagView.scss";

const TagView: React.FC = () => (
  <div className="tag-view">
    <p className="tag-view__title">Tags</p>
    <Card>
      <div className="tag-view__content">
        <Checkbox
          id="tagViewCheckboxId1"
          name="tagViewCheckboxName1"
          text="All"
        />
      </div>
    </Card>
  </div>
);

export default TagView;
