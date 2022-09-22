import { FC } from "react";
import OptionView from "../optionView/OptionView";
import "./slidingView.scss";

type Prop = {
  visible: boolean
};

const SlidingView: FC<Prop> = ({ visible }: Prop) => (visible ? (
  <div
    className="sliding-view animation__slide-in-left"
    onClick={(e) => e.stopPropagation()}
    onKeyDown={(e) => e.stopPropagation()}
    role="button"
    tabIndex={0}
  >
    <OptionView />
  </div>
) : null);

export default SlidingView;
