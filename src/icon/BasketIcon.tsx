import React from "react";

type Prop = {
    className: string
}

const BasketIcon: React.FC<Prop> = ({ className }: Prop) => (
  <svg className={className}>
    <path
      d="M5.41174 9.46655H18.5884V21.0081H5.41174V9.46655Z"
    />
    <path
      d="M9.67188 4.65747H14.3412L15.2765 5.62625V9.4666L14.2645 9.46388V5.6242H9.75454V9.46388L8.72388 9.4666V5.6242L9.67188 4.65747Z"
    />
  </svg>

);

export default BasketIcon;
