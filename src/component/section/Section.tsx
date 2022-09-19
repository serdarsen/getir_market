import { FC } from "react";
import ProductView from "../productView/ProductView";
import "./section.scss";

const Section: FC = () => (
  <section className="section">
    <ProductView />
  </section>
);

export default Section;
