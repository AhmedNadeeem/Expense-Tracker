const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const { main } = require("./connection");

//-> Establish a connection with DataBase <-//
main()
  .then(console.log("Connected to DataBase"))
  .catch((err) => console.log(err));

//-> Middlewares <-//
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = require("./routes/expenses");
const staticRouter = require("./routes/expense-static");
//-> Index Routes <-//
app.get("/", (req, res) => {
  res.redirect("/expenses");
});

app.use("/expenses", staticRouter);
app.use("/api", router);

app.listen(8080, (req, res) => console.log("App is listening to port 8080"));
