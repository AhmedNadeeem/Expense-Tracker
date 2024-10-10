const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Expense = require("./models/expense");
const Income = require("./models/income");
const path = require("path");
const ejsMate = require("ejs-mate");

//-> Establish a connection with DataBase <-//
main()
  .then(console.log("Connected to DataBase"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/expenseTracker");
}

//-> Middlewares <-//
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//-> Index Routes <-//
app.get("/", (req, res) => {
  res.redirect("/expenses");
});

//-> Index Route<-//
app.get("/expenses", async (req, res) => {
  const Incomes = await Income.find({});
  const Expenses = await Expense.find({});
  res.render("index.ejs", { Incomes, Expenses });
});

//-> Get Route - Income<-//
app.get("/expenses/add-income", (req, res) => {
  res.render("income.ejs");
});

//-> Post Route - Income<-//
app.post("/expenses/income", async (req, res) => {
  const income = new Income(req.body.income);
  await income.save();
  res.redirect("/expenses");
});

//-> Get Route - Expense<-//
app.get("/expenses/add-expenses", (req, res) => {
  res.render("expense.ejs");
});

//-> Post Route - Expense<-//
app.post("/expenses/expense", async (req, res) => {
  const expense = new Expense(req.body.expense);
  await expense.save();
  // res.redirect("/expenses");
  res.send("ok");
});

app.listen(8080, (req, res) => console.log("App is listening to port 8080"));
