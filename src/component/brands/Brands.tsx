import React from "react";
import Card from "../card/Card";
import "./brands.scss";

const Brands: React.FC = () => (
  <div className="app__brands">
    <p className="app__brands-title">Brands</p>
    <Card>
      <div className="app__brands-content">
        Brands
      </div>
    </Card>
  </div>
);

export default Brands;
