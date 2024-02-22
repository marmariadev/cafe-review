const Cafe = require('../models/cafeModel');

const findAllCafes = async () => {
    return await Cafe.find();
};

const addCafe = async (cafeData) => {
    const cafe = new Cafe(cafeData);
    await cafe.save();
    return cafe;
};

// Export more functions as needed
module.exports = {
    findAllCafes,
    addCafe,
};
