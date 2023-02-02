import { ReactNode } from "react";

interface Prop {
  children: ReactNode
}

const Card: React.FC<Prop> = ({ children }: Prop) => (
  <div
    className="
      dark:bg-custom-gray-900
      rounded-sm
      bg-white
      shadow-[0px_6px_24px_rgba(93,62,188,0.04)]"
  >
    {children}
  </div>
);

export default Card;
