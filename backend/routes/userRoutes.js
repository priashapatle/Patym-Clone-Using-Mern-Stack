const express = require('express');
const { createUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// Define User Routes
router.post('/create', createUser);
router.post('/login', userController.loginUser);

module.exports = router;
