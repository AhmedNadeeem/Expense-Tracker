const mongoose = require("mongoose");

const incomeSchema = new mongoose.Schema({
  incomeValue: Number,
  incomeCategory: String,
});

const Income = mongoose.model("Income", incomeSchema);

module.exports = Income;
