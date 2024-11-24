const Expense = require("../models/expense");
const Income = require("../models/income");

const handleIndexRouteGetRequest = async (req, res) => {
  const Incomes = await Income.find({});
  const Expenses = await Expense.find({});

  const totalExpense = Expenses.reduce(
    (sum, inc) => (sum += inc.expenseValue),
    0
  );
  const totalIncome = Incomes.reduce((sum, inc) => (sum += inc.incomeValue), 0);

  // Expenses.map((inc) => {
  //   expenseData.labels.push(inc.expenseCategory);
  //   expenseData.values.push(inc.expenseValue);
  // });

  res.render("index.ejs", {
    Incomes,
    Expenses,
    totalIncome,
    totalExpense,
  });
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
