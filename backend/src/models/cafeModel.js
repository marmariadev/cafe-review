const mongoose = require('mongoose');

const cafeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: String,
    description: String,
    rating: { type: Number, default: 0 },
});

const Cafe = mongoose.model('Cafe', cafeSchema);

module.exports = Cafe;
