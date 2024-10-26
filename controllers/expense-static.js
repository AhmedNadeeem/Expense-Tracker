const Expense = require("../models/expense");
const Income = require("../models/income");

const handleIndexRouteGetRequest = async (req, res) => {
  const Incomes = await Income.find({});
  const Expenses = await Expense.find({});
  res.render("index.ejs", { Incomes, Expenses });
};

const handleAddIncomeRouteGetRequest = async (req, res) => {
  res.render("income.ejs");
};

const handleAddExpenseRouteGetRequest = async (req, res) => {
  res.render("expense.ejs");
};

module.exports = {
  handleIndexRouteGetRequest,
  handleAddIncomeRouteGetRequest,
  handleAddExpenseRouteGetRequest,
};
