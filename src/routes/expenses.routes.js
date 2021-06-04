  
"use strict";

const express = require("express");
const router = express.Router();

const expense = require("../controllers/expenses.controller");

router.post("/expenseCreate", expense.createExpense);
router.get("/expensesView", expense.getExpenses);
router.get("/expenseView/:expenseId", expense.getExpenseById);
router.put("/expenseUpdate/:expenseId", expense.updateExpenseById);
router.delete("/expenseDelete/:expenseId", expense.deleteExpenseById);

module.exports = router;