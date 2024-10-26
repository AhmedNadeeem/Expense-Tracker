const Expense = require("../models/expense");
const Income = require("../models/income");

const handleAddIncome = async (req, res) => {
  const income = new Income(req.body.income);
  await income.save();
  res.redirect("/expenses");
};

const handleAddExpense = async (req, res) => {
  const expense = new Expense(req.body.expense);
  await expense.save();
  res.redirect("/expenses");
  //   res.send("ok");
};

module.exports = { handleAddExpense, handleAddIncome };
