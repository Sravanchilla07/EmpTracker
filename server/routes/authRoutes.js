const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).send('User not found');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Invalid credentials');

        const token = jwt.sign({ id: user._id, role: user.role }, 'secretKey', { expiresIn: '1d' });
        res.status(200).json({ token, user });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/users', authMiddleware(['manager']), async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

router.put('/users/:id', authMiddleware(['manager']), async (req, res) => {
    const { role } = req.body;
    try {
        await User.findByIdAndUpdate(req.params.id, { role });
        res.status(200).send('Role updated');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
