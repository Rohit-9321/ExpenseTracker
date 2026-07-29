const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value || 0);

export default function SummaryCard({ total, count }) {
  return (
    <section className="summary" aria-label="Spending summary">
      <div className="summary__row">
        <span className="summary__label">Total spent</span>
        <span className="summary__count">
          {count} {count === 1 ? "entry" : "entries"}
        </span>
      </div>
      <div className="summary__total">{formatCurrency(total)}</div>
      <div className="summary__divider" aria-hidden="true"></div>
    </section>
  );
}
