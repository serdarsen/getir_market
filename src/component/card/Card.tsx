import { FC, ReactNode } from "react";
import "./card.scss";

type Prop = {
  children: ReactNode
};

const Card: FC<Prop> = ({ children }: Prop) => (
  <div className="card">
    {children}
  </div>
);

export default Card;
