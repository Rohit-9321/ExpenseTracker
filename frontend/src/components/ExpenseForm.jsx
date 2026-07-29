import { useState } from "react";

const CATEGORIES = [
  "Food",
  "Transport",
  "Housing",
  "Utilities",
  "Entertainment",
  "Health",
  "Shopping",
  "Other",
];

const today = () => new Date().toISOString().slice(0, 10);

const emptyForm = {
  amount: "",
  description: "",
  category: "Food",
  date: today(),
};

export default function ExpenseForm({ onAdd, isSubmitting }) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.amount || Number(form.amount) <= 0) {
      setError("Enter an amount greater than 0.");
      return;
    }
    if (!form.description.trim()) {
      setError("Add a short description.");
      return;
    }
    if (!form.date) {
      setError("Pick a date.");
      return;
    }

    try {
      await onAdd({ ...form, amount: Number(form.amount) });
      setForm({ ...emptyForm, date: today() });
    } catch (err) {
      setError(err?.response?.data?.message || "Could not add expense. Try again.");
    }
  };

  return (
    <section className="ticket" aria-label="Add expense">
      <div className="ticket__perforation" aria-hidden="true"></div>
      <h2 className="ticket__title">New expense</h2>

      <form className="ticket-form" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="amount">Amount</label>
          <div className="field__amount">
            <span aria-hidden="true">$</span>
            <input
              id="amount"
              name="amount"
              type="number"
              inputMode="decimal"
              step="0.01"
              min="0.01"
              placeholder="0.00"
              value={form.amount}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="description"
            type="text"
            placeholder="e.g. Grocery run"
            value={form.description}
            onChange={handleChange}
            maxLength={120}
            autoComplete="off"
          />
        </div>

        <div className="field-row">
          <div className="field">
            <label htmlFor="category">Category</label>
            <select id="category" name="category" value={form.category} onChange={handleChange}>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="date">Date</label>
            <input id="date" name="date" type="date" value={form.date} onChange={handleChange} />
          </div>
        </div>

        {error && (
          <p className="field-error" role="alert">
            {error}
          </p>
        )}

        <button type="submit" className="btn-primary" disabled={isSubmitting}>
          {isSubmitting ? "Adding…" : "Add expense"}
        </button>
      </form>
    </section>
  );
}
