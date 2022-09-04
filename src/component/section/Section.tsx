import React, { useEffect } from "react";
import Item from "../../model/Item";
import { findCompaniesFetch } from "../../service/CompanySlice";
import { findItemsFetch } from "../../service/ItemSlice";
import { useAppDispatch, useAppSelector } from "../../service/ReduxHook";
import Card from "../card/Card";
import Chip from "../chip/Chip";
import ItemCard from "../itemcard/ItemCard";
import "./section.scss";

const Section: React.FC = () => {
  const companies = useAppSelector((state) => state.companies.companies);
  const items = useAppSelector((state) => state.items.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findCompaniesFetch());
    dispatch(findItemsFetch());
  }, [dispatch]);

  console.log("companies: ", companies);
  console.log("items: ", items);

  return (
    <section className="app__section">
      <h4 className="app__section-title">Products</h4>
      <div className="app__section-chip">
        {["mug", "shirt"].map((itemType) => <Chip text={itemType} />)}
      </div>
      <Card>
        <div className="app__section-grid">
          {items.map((item: Item) => <ItemCard key={item.id} item={item} />)}
        </div>
      </Card>
    </section>
  );
};

export default Section;
