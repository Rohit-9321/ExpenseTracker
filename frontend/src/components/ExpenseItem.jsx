const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value || 0);

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });

export default function ExpenseItem({ expense, onDelete, isDeleting }) {
  return (
    <li className="row">
      <div className="row__main">
        <p className="row__description">{expense.description}</p>
        <div className="row__meta">
          <span className="tag">{expense.category}</span>
          <span className="row__date">{formatDate(expense.date)}</span>
        </div>
      </div>

      <div className="row__end">
        <span className="row__amount">{formatCurrency(expense.amount)}</span>
        <button
          type="button"
          className="btn-delete"
          onClick={() => onDelete(expense._id)}
          disabled={isDeleting}
          aria-label={`Delete ${expense.description}`}
        >
          {isDeleting ? "…" : "Delete"}
        </button>
      </div>
    </li>
  );
}
