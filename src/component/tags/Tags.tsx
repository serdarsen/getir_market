import React from "react";
import Card from "../card/Card";
import Checkbox from "../checkbox/Checkbox";
import "./tags.scss";

const Tags: React.FC = () => (
  <div className="app__tags">
    <p className="app__tags-title">Tags</p>
    <Card>
      <div className="app__tags-content">
        <Checkbox />
      </div>
    </Card>
  </div>
);

export default Tags;
