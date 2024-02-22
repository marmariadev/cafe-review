const cafeService = require('../services/cafeService');

const getCafes = async (req, res) => {
    try {
        const cafes = await cafeService.findAllCafes();
        res.json(cafes);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createCafe = async (req, res) => {
    try {
        const cafe = await cafeService.addCafe(req.body);
        res.status(201).json(cafe);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getCafes,
    createCafe,
};
