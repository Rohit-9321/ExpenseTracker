const express = require("express");
const router = express.Router();
const { getExpenses, addExpense, deleteExpense } = require("../controllers/expenseController");

// POST /api/expenses  -> Add new expense
// GET  /api/expenses  -> Get all expenses
router.route("/").get(getExpenses).post(addExpense);

// DELETE /api/expenses/:id -> Delete expense
router.route("/:id").delete(deleteExpense);

module.exports = router;
