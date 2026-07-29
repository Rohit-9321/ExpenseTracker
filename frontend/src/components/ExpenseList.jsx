import ExpenseItem from "./ExpenseItem.jsx";

export default function ExpenseList({ expenses, isLoading, deletingId, onDelete }) {
  if (isLoading) {
    return <p className="state-message">Loading expenses…</p>;
  }

  if (!expenses.length) {
    return (
      <div className="empty-state">
        <p className="empty-state__title">No expenses yet</p>
        <p className="empty-state__body">Entries you add will show up here as a running ledger.</p>
      </div>
    );
  }

  return (
    <ul className="row-list">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense._id}
          expense={expense}
          onDelete={onDelete}
          isDeleting={deletingId === expense._id}
        />
      ))}
    </ul>
  );
}
