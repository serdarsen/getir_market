import React from "react";
import Card from "../card/Card";
import Search from "../search/Search";
import "./brandView.scss";

const Brands: React.FC = () => {
  const onSearch = (searchTerm: string):void => {
    console.log("searchTerm: ", searchTerm);
  };

  return (
    <div className="brand-view">
      <p className="brand-view__title">Brands</p>
      <Card>
        <div className="brand-view__body">
          <Search
            id="brandViewSearchId"
            placeholder="Search brand"
            onSearch={onSearch}
          />
        </div>
      </Card>
    </div>
  );
};

export default Brands;
