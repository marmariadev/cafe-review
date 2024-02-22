const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/database');

const app = express();

// Database connection
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Coffee Review API');
});

module.exports = app;
