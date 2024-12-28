import React, { useState } from 'react';
import axios from '../services/api';

const AttendanceForm = () => {
    const [status, setStatus] = useState('');

    const handleClockIn = () => {
        axios.post('/attendance/clockin')
            .then(() => setStatus('Clocked In!'))
            .catch(error => console.error(error));
    };

    const handleClockOut = () => {
        axios.post('/attendance/clockout')
            .then(() => setStatus('Clocked Out!'))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Attendance Form</h1>
            <button onClick={handleClockIn}>Clock In</button>
            <button onClick={handleClockOut}>Clock Out</button>
            <p>{status}</p>
        </div>
    );
};

export default AttendanceForm;
