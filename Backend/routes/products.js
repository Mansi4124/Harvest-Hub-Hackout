const express = require('express');
const router = express.Router();
const Product = require('../models/Products');
const auth = require('../middleware/auth'); // Assuming you have an auth middleware to verify JWT

// @route   POST /api/products/add
// @desc    Add a new product
// @access  Private
router.post('/add', auth, async (req, res) => {
    const { name, category, price } = req.body;

    try {
        const newProduct = new Product({
            name,
            category,
            price,
            addedBy: req.user.id // `req.user` is available because of the auth middleware
        });

        const product = await newProduct.save();
        res.json(product);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
