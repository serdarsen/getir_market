import { FC } from "react";
import Aside from "./Aside";
import Section from "./Section";

const Main: FC = () => (
  <main
    className="
      mt-[2.5rem]
      grid
      grid-cols-3
      gap-4
      max-[495px]:m-8
      max-[495px]:grid-cols-1"
  >
    <Aside />
    <Section />
  </main>
);

export default Main;
