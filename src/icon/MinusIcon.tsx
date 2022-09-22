import { FC } from "react";

type Prop = {
  className: string
};

const MinusIcon: FC<Prop> = ({ className }: Prop) => (
  <svg
    className={className}
    viewBox="0 0 10 3"
  >
    <rect
      y="0.725586"
      width="10"
      height="2.04384"
      rx="1"
    />
  </svg>

);

export default MinusIcon;
