const express = require("express");
const staticRouter = express.Router();
const {
  handleIndexRouteGetRequest,
  handleAddIncomeRouteGetRequest,
  handleAddExpenseRouteGetRequest,
} = require("../controllers/expense-static");

staticRouter.get("/", handleIndexRouteGetRequest);

staticRouter.get("/add-income", handleAddIncomeRouteGetRequest);

staticRouter.get("/add-expenses", handleAddExpenseRouteGetRequest);

module.exports = staticRouter;
