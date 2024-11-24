const Expense = require("../models/expense");
const Income = require("../models/income");

const handleAddIncome = async (req, res) => {
  const income = new Income(req.body);
  await income.save();
  res.redirect("/expenses");
};

const handleAddExpense = async (req, res) => {
  const { expenseValue, expenseCategory } = req.body;
  const expense = new Expense(req.body);
  await expense.save();
  res.redirect("/expenses");
};

module.exports = { handleAddExpense, handleAddIncome };
