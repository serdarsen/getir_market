type Prop = {
  className: string
};

const CheckIcon: React.FC<Prop> = ({ className }: Prop) => (
  <div className="checkbox-icon">
    <svg
      className={className}
      width="13"
      height="9"
      viewBox="0 0 13 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6667 1L4.33333 8.33333L1 5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default CheckIcon;
