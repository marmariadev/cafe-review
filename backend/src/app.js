const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/database');
const cafeRoutes = require('./routes/cafeRoutes');

const app = express();

// Database connection
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/cafes', cafeRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Coffee Review API');
});

module.exports = app;
