const express = require('express');
const Attendance = require('../models/Attendance');

const router = express.Router();

router.post('/clockin', async (req, res) => {
    const { employeeId } = req.body;
    const attendance = new Attendance({ employeeId, date: new Date().toISOString().split('T')[0] });
    await attendance.save();
    res.status(201).send(attendance);
});

router.post('/clockout', async (req, res) => {
    const { employeeId } = req.body;
    const attendance = await Attendance.findOne({ employeeId, date: new Date().toISOString().split('T')[0] });
    attendance.clockOut = new Date().toISOString().split('T')[1];
    await attendance.save();
    res.status(200).send(attendance);
});

module.exports = router;
