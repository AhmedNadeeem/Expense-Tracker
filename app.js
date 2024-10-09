const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Expense = require("./models/expense");
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

//-> Routes <-//
app.get("/", (req, res) => {
  res.redirect("/expenses");
});

app.get("/expenses", (req, res) => {
  res.render("index.ejs");
});

app.listen(8080, (req, res) => console.log("App is listening to port 8080"));
