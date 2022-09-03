import React from "react";
import Aside from "../aside/Aside";
import Section from "../section/Section";
import "./main.scss";

const Main: React.FC = () => (
  <main className="app__main">
    <Aside />
    <Section />
  </main>
);

export default Main;
