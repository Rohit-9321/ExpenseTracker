const Expense = require("../models/Expense");

// @desc    Get all expenses (most recent first)
// @route   GET /api/expenses
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1, createdAt: -1 });
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    res.status(200).json({ count: expenses.length, total, expenses });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch expenses", error: err.message });
  }
};

// @desc    Add a new expense
// @route   POST /api/expenses
const addExpense = async (req, res) => {
  try {
    const { amount, description, category, date } = req.body;

    if (!amount || !description || !category || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const expense = await Expense.create({ amount, description, category, date });
    res.status(201).json(expense);
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ message: messages.join(", ") });
    }
    res.status(500).json({ message: "Failed to add expense", error: err.message });
  }
};

// @desc    Delete an expense
// @route   DELETE /api/expenses/:id
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    await expense.deleteOne();
    res.status(200).json({ message: "Expense deleted", id: req.params.id });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid expense id" });
    }
    res.status(500).json({ message: "Failed to delete expense", error: err.message });
  }
};

module.exports = { getExpenses, addExpense, deleteExpense };
