import React from "react";
import "./currencyView.scss";

type Prop = {
    currency: number
    gap: number
}

const CurrencyView: React.FC<Prop> = ({ currency, gap }: Prop) => {
  const formattedCurrency = new Intl.NumberFormat("tr-TR", {
    currency: "TRY",
    style: "currency",
  }).formatToParts(currency).map((i) => i.value);

  const [symbol, ...numerical] = formattedCurrency;

  return (
    <div className="currency-view" style={{ gap: `${gap}em` }}>
      <p className="currency-view__symbol">{symbol}</p>
      <p className="currency-view__numerical">{numerical}</p>
    </div>
  );
};

export default CurrencyView;
