import { ArrowIcon } from "../icon";

interface Prop {
  direction: "left" | "right";
  text: string;
  onClick: () => void,
  disabled: boolean
}

const ArrowButton: React.FC<Prop> = ({
  direction, text, onClick, disabled,
}: Prop) => {
  const isLeft = direction === "left";

  return (
    <button
      disabled={disabled}
      type="button"
      className={
        `text-custom-blue-100 
         disabled:text-custom-gray-500
         inline-flex
         items-center 
         justify-center
         gap-[0.75rem]
         ${isLeft ? "flex-row" : "flex-row-reverse"}
         group`
      }
      onClick={onClick}
    >
      <ArrowIcon
        className={
          `group-disabled:fill-custom-gray-500 
           fill-custom-blue-100
           h-[0.9rem]
           w-[0.9rem]  
           ${isLeft ? "rotate-180" : ""}`
        }
      />
      {text}
    </button>
  );
};

export default ArrowButton;
