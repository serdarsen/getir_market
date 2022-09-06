import React from "react";
import Card from "../card/Card";
import "./brandView.scss";

const Brands: React.FC = () => (
  <div className="brand-view">
    <p className="brand-view__title">Brands</p>
    <Card>
      <div className="brand-view__body" />
    </Card>
  </div>
);

export default Brands;
