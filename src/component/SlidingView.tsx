import OptionView from "./OptionView";

interface Prop {
  visible: boolean
}

const SlidingView: React.FC<Prop> = ({ visible }: Prop) => (visible ? (
  <div
    className="
      animation__slide-in-left
      dark:border-custom-blue-200
      dark:bg-custom-gray-800
      bg-custom-gray-50
      border-custom-blue-100
      absolute
      left-[1.5rem]
      top-[4.5rem]
      rounded-sm
      border-[0.3rem]
      border-solid
      p-4"
    onClick={(e) => e.stopPropagation()}
    onKeyDown={(e) => e.stopPropagation()}
    role="button"
    tabIndex={0}
  >
    <OptionView />
  </div>
) : null);

export default SlidingView;
