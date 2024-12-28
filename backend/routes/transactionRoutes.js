const express = require('express');
const router = express.Router();

// Import necessary functions from the transaction controller
const {
  addMoney,
  transferMoney,
  getHistory,
  getTransactions,
  createTransaction,
} = require('../controllers/transactionController');

// Define Transaction Routes
router.post('/add-money', addMoney); // Route to add money
router.post('/transfer-money', transferMoney); // Route to transfer money
router.get('/history', getHistory); // Route to get transaction history

// Define additional routes
router.get('/all', getTransactions); // Route to fetch all transactions
router.post('/create', createTransaction); // Route to create a transaction

module.exports = router;
