require('dotenv').config();
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Paytm Clone Backend is running!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));