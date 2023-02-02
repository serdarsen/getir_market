import { FC } from "react";
import OptionView from "./OptionView";

const Aside: FC = () => (
  <aside>
    <div
      className="
       max-[955px]:hidden"
    >
      <OptionView />
    </div>
  </aside>
);

export default Aside;
