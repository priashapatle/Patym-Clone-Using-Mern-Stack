const express = require('express');
const { addMoney, transferMoney, getHistory } = require('./TransactionController'); // Correct path to the controller

const router = express.Router();

// Define Routes
router.post('/add-money', addMoney);
router.post('/transfer-money', transferMoney);
router.get('/history', getHistory);

module.exports = router;

// TransactionController.js

const getTransactions = (req, res) => {
    // Logic to handle GET request
    res.send("Transactions fetched");
  };
  
  const createTransaction = (req, res) => {
    // Logic to handle POST request
    res.send("Transaction created");
  };
  
  module.exports = {
    getTransactions,
    createTransaction,
  };
  