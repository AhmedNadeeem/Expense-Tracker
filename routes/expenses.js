const express = require("express");
const router = express.Router();
const { handleAddExpense, handleAddIncome } = require("../controllers/expense");

router.post("/api/income", handleAddIncome);
router.post("/api/expense", handleAddExpense);

module.exports = router;
