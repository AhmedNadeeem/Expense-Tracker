const express = require("express");
const router = express.Router();
const { handleAddExpense, handleAddIncome } = require("../controllers/expense");

router.post("/income", handleAddIncome);
router.post("/expense", handleAddExpense);

module.exports = router;
