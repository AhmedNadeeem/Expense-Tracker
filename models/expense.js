const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  expenseValue: Number,
  expenseCategory: String,
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
