"use strict";

const Expense = require("../models/expenses.model");

const ExpenseCtrl = {};

// Create Expense
ExpenseCtrl.createExpense = async (req, res) => {
  const { amount, price } = req.body;

  try {
    const newExpense = new Expense({
      amount,
      price,
    });

    const savedExpense = await newExpense.save();
    console.log(savedExpense);

    res.status(201).json(savedExpense);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

// Get Expenses
ExpenseCtrl.getExpenses = async (req, res) => {
  const expenses = await Expense.find();
  return res.json(expenses);
};

// Get Expense for Id
ExpenseCtrl.getExpenseById = async (req, res) => {
  const { expenseId } = req.params;

  const expense = await Expense.findById(expenseId);
  res.status(200).json(expense);
};

// Update Expense for Id
ExpenseCtrl.updateExpenseById = async (req, res) => {
  const updateExpense = await Expense.findByIdAndUpdate(
    req.params.expenseId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateExpense);
};

// Delete Expense for Id
ExpenseCtrl.deleteExpenseById = async (req, res) => {
  const { expenseId } = req.params;

  await Exoense.findByIdAndDelete(expenseId);

  //code 204 is ok too
  res.status(200).json();
};

module.exports = ExpenseCtrl;
