import React from "react";
import Brands from "../brands/Brands";
import Sorting from "../sorting/Sorting";
import Tags from "../tags/Tags";
import "./aside.scss";

const Aside: React.FC = () => (
  <aside className="app__aside">
    <Sorting />
    <Brands />
    <Tags />
  </aside>
);

export default Aside;
