import React from "react";
import Products from "../products/Products";
import "./section.scss";

const Section: React.FC = () => (
  <section className="app__section">
    <Products />
  </section>
);

export default Section;
