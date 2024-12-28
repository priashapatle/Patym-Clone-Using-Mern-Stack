// Create User Controller
const createUser = (req, res) => {
    const { username, email, password } = req.body;

    // You can add your database logic here to save the user
    res.status(201).send({ message: 'User created successfully!', user: { username, email } });
};

// Login User Controller
const loginUser = (req, res) => {
    const { email, password } = req.body;

    const userController = require('../controllers/userController');

    // Add logic to verify user from the database
    if (email === 'test@example.com' && password === 'password123') {
        res.status(200).send({ message: 'Login successful!', token: 'fake-jwt-token' });
    } else {
        res.status(401).send({ message: 'Invalid email or password!' });
    }
};

module.exports = { createUser, loginUser };
