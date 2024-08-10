const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Register a new user
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if all fields are provided
        if (!name || !email || !password || !role) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create new user
        const newUser = new User({
            name,
            email,
            password,
            role,
        });

        // Hash password before saving
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);

        // Save user to the database
        await newUser.save();

        res.status(201).json({ msg: 'User registered successfully', user: newUser });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
