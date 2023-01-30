type Prop = {
  currency: number
  gap: number
};

const CurrencyView: React.FC<Prop> = ({ currency, gap }: Prop) => {
  const formattedCurrency = new Intl.NumberFormat("tr-TR", {
    currency: "TRY",
    style: "currency",
  }).formatToParts(currency).map((i) => i.value);

  const [symbol, ...numerical] = formattedCurrency;

  return (
    <div className="inline-flex" style={{ gap: `${gap}em` }}>
      <p>{symbol}</p>
      <p>{numerical}</p>
    </div>
  );
};

export default CurrencyView;
