const express = require('express');
const Attendance = require('../models/Attendance');

const router = express.Router();

router.get('/summary', async (req, res) => {
    try {
        const summary = await Attendance.aggregate([
            { $group: { _id: '$date', present: { $sum: 1 } } },
        ]);
        res.status(200).json(summary);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/trend', async (req, res) => {
    try {
        const trends = await Attendance.aggregate([
            { $group: { _id: '$employeeId', hoursWorked: { $sum: 8 } } },
        ]);
        res.status(200).json(trends);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
