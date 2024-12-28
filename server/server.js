const express = require('express');
const mongoose = require('mongoose');
const attendanceRoutes = require('./routes/attendanceRoutes');
const authRoutes = require('./routes/authRoutes');
const reportRoutes = require('./routes/reportRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/employee-tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/auth', authRoutes);
app.use('/attendance', attendanceRoutes);
app.use('/reports', reportRoutes);

app.use(errorMiddleware); // Use error middleware

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
