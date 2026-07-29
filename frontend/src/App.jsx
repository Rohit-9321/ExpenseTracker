import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import SummaryCard from "./components/SummaryCard.jsx";
import ExpenseForm from "./components/ExpenseForm.jsx";
import ExpenseList from "./components/ExpenseList.jsx";
import { fetchExpenses, createExpense, removeExpense } from "./api/expenseApi.js";

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [loadError, setLoadError] = useState("");

  const loadExpenses = async () => {
    try {
      setIsLoading(true);
      setLoadError("");
      const data = await fetchExpenses();
      setExpenses(data.expenses);
      setTotal(data.total);
    } catch (err) {
      setLoadError("Couldn't reach the server. Is the backend running?");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const handleAdd = async (expense) => {
    setIsSubmitting(true);
    try {
      const created = await createExpense(expense);
      setExpenses((prev) =>
        [created, ...prev].sort((a, b) => new Date(b.date) - new Date(a.date))
      );
      setTotal((prev) => prev + created.amount);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    setDeletingId(id);
    const target = expenses.find((e) => e._id === id);
    try {
      await removeExpense(id);
      setExpenses((prev) => prev.filter((e) => e._id !== id));
      if (target) setTotal((prev) => prev - target.amount);
    } catch (err) {
      // Leave the row in place if the delete failed
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="app-shell">
      <Header />

      <main className="app-main">
        <aside className="app-main__aside">
          <ExpenseForm onAdd={handleAdd} isSubmitting={isSubmitting} />
        </aside>

        <section className="app-main__content">
          <SummaryCard total={total} count={expenses.length} />

          {loadError ? (
            <p className="state-message state-message--error">{loadError}</p>
          ) : (
            <ExpenseList
              expenses={expenses}
              isLoading={isLoading}
              deletingId={deletingId}
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>

      <footer className="app-footer">Ledger — track what you spend, one entry at a time.</footer>
    </div>
  );
}
