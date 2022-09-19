import { FC } from "react";
import Aside from "../aside/Aside";
import Section from "../section/Section";
import "./main.scss";

const Main: FC = () => (
  <main className="main">
    <Aside />
    <Section />
  </main>
);

export default Main;
