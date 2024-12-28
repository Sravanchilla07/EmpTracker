const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    employeeId: { type: String, required: true },
    date: { type: String, required: true },
    clockIn: { type: String },
    clockOut: { type: String },
    status: { type: String, default: 'On Time' },
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
